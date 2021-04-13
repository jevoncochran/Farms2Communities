import { useEffect } from "react";
import styles from "./PaymentForm.module.scss";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const FlakeIdGen = require("flake-idgen"),
  intformat = require("biguint-format"),
  generator = new FlakeIdGen();
import { connect } from "react-redux";
import { finalizeOrder } from "../../../../redux/actions";

function PaymentForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.password !== props.reenteredPassword) {
      props.setMessage({ status: "error", text: "Passwords do not match" });
      displayMsg();
      return;
    }

    if (props.selectedProduct.id === 2) {
      if (!props.promoCode) {
        props.setMessage({ status: "error", text: "Promo code is required" });
        displayMsg();
        return;
      } else {
        if (props.promoCode.toUpperCase() !== "FTC10") {
          props.setMessage({ status: "error", text: "Invalid promo code" });
          displayMsg();
          return;
        }
      }
    }

    // Generate Stripe ID for customer
    await props.setCustomer({
      ...props.customer,
      stripe_id: intformat(generator.next(), "dec"),
    });

    // Add customer to customer table
    // Add order to order table
    if (props.addressLine2) {
      // If address has a line 2, add line before moving forward
      props.setCustomer({
        ...props.customer,
        address: `${props.customer.address}, ${props.addressLine2}`,
      });
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        console.log(paymentMethod);
        const { id } = paymentMethod;
        props.finalizeOrder(
          props.customer,
          {
            product_id: props.selectedProduct.id,
            quantity: props.selectedProduct.quantity,
            total: props.selectedProduct.price * props.selectedProduct.quantity,
            date: generateDate(),
          },
          {
            amount:
              props.selectedProduct.price *
              props.selectedProduct.quantity *
              100,
            paymentMethodId: id,
          },
          props.selectedProduct.stripe_price_id
        );
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const generateDate = () => {
    let d = new Date();

    let month = (1 + d.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = d.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    let year = d.getFullYear();

    return month + "/" + day + "/" + year;
  };

  const displayMsg = () => {
    props.setDisplayMsg(true);
    setTimeout(() => props.setDisplayMsg(false), 3000);
  };

  useEffect(() => {
    if (props.paymentSuccess) {
      props.setMessage({ status: "success", text: "Payment was successful!" });
      displayMsg();
      console.log("Payment success useEffect ran!");
    }
  }, [props.paymentSuccess]);

  return (
    <div className={styles.pf}>
      <form onSubmit={handleSubmit}>
        <div className={styles["pf-label-cont"]}>
          <p>Pay with your credit card</p>
        </div>
        <CardElement />
        <button className={styles["pf-btn"]}>place order</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.customer.selectedProduct,
    paymentSuccess: state.customer.payment_success,
  };
};

export default connect(mapStateToProps, { finalizeOrder })(PaymentForm);
