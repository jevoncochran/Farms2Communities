import { useState, useEffect, useRef } from "react";
import styles from "./Checkout.module.scss";
import Layout from "../Layout";
import CustomerForm from "./CustomerForm";
import SupplementalInfo from "./SupplementalInfo";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import RecapAndPayment from "./RecapAndPayment";
import StripeContainer from "./StripeContainer";
import { connect } from "react-redux";
import emailjs from "emailjs-com";

const Checkout = () => {
  const [customer, setCustomer] = useState({
    first_name: "",
    last_name: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
  });
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [promoCode, setPromoCode] = useState(null);
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [message, setMessage] = useState({ status: "", text: "" });

  const [addressLine2, setAddressLine2] = useState("");

  const [displayMsg, setDisplayMsg] = useState(false);

  // let hiddenFormBtn = "";
  // const hiddenFormBtn = useRef(null);
  // console.log("hiddenFormBtn not associated w click fn: ", hiddenFormBtn);

  // const hiddenFormBtnClick = (e, referencedElement) => {
  //   // e.preventDefault();
  //   console.log("referencedElement: ", referencedElement);
  //   referencedElement.click();
  // };

  const submitNotification = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cv3upmr",
        "template_85bjdlq",
        e.target,
        "user_gcST2H5scnEqWsdWxVu4s"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  useEffect(() => {
    console.log("customer: ", customer);
  }, [customer]);

  useEffect(() => {
    console.log("addressLine2: ", addressLine2);
  }, [addressLine2]);

  useEffect(() => {
    console.log("message: ", message);
  }, [message]);

  useEffect(() => {
    console.log("reenteredPassword: ", reenteredPassword);
  }, [reenteredPassword]);

  useEffect(() => {
    console.log("deliveryNotes: ", deliveryNotes);
  }, [deliveryNotes]);

  return (
    <Layout>
      <div className={styles.checkout}>
        <div
          className={styles["checkout-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["checkout-header-text"]}>Checkout</p>
        </div>
        <div className={styles["checkout-content"]}>
          <div className={styles["checkout-cust-info"]}>
            <CustomerForm
              customer={customer}
              setCustomer={setCustomer}
              addressLine2={addressLine2}
              setAddressLine2={setAddressLine2}
              reenteredPassword={reenteredPassword}
              setReenteredPassword={setReenteredPassword}
              submitNotification={submitNotification}
              // hiddenFormBtn={hiddenFormBtn}
            />
            <div className={styles["checkout-cust-info-right"]}>
              <SupplementalInfo
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                deliveryNotes={deliveryNotes}
                setDeliveryNotes={setDeliveryNotes}
              />
              <RecapAndPayment />
              <StripeContainer
                customer={customer}
                setCustomer={setCustomer}
                addressLine2={addressLine2}
                promoCode={promoCode}
                setMessage={setMessage}
                setDisplayMsg={setDisplayMsg}
                password={customer.password}
                reenteredPassword={reenteredPassword}
                deliveryNotes={deliveryNotes}
                // hiddenFormBtnClick={hiddenFormBtnClick}
              />
            </div>
          </div>
        </div>
      </div>
      {displayMsg && message.status === "success" && (
        <div className={styles["checkout-success-msg"]}>
          <p>{message.text}</p>
        </div>
      )}
      {displayMsg && message.status === "error" && (
        <div className={styles["checkout-error-msg"]}>
          <p>{message.text}</p>
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(Checkout);
