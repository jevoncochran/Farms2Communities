import { useState, useEffect } from "react";
import styles from "./Checkout.module.scss";
import Layout from "../Layout";
import CustomerForm from "./CustomerForm";
import SupplementalInfo from "./SupplementalInfo";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import RecapAndPayment from "./RecapAndPayment";
import StripeContainer from "./StripeContainer";
import { connect } from "react-redux";

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

  const [promoCode, setPromoCode] = useState(null);
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [message, setMessage] = useState({ status: "", text: "" });

  const [addressLine2, setAddressLine2] = useState("");

  const [displayMsg, setDisplayMsg] = useState(false);

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
            />
            <div className={styles["checkout-cust-info-right"]}>
              <SupplementalInfo
                promoCode={promoCode}
                setPromoCode={setPromoCode}
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
