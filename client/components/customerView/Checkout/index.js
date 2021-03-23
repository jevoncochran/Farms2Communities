import { useState, useEffect } from "react";
import styles from "./Checkout.module.scss";
import Layout from "../Layout";
import CustomerForm from "./CustomerForm";
import SupplementalInfo from "./SupplementalInfo";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import RecapAndPayment from "./RecapAndPayment";
import StripeContainer from "./StripeContainer";
import { join } from "path";

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

  const [addressLine2, setAddressLine2] = useState("");

  useEffect(() => {
    console.log("customer: ", customer);
  }, [customer]);

  useEffect(() => {
    console.log("addressLine2: ", addressLine2);
  }, [addressLine2]);

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
            />
            <div className={styles["checkout-cust-info-right"]}>
              <SupplementalInfo />
              <RecapAndPayment />
              <StripeContainer
                customer={customer}
                setCustomer={setCustomer}
                addressLine2={addressLine2}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
