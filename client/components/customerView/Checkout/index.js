import styles from "./Checkout.module.scss";
import Layout from "../Layout";
import CustomerForm from "./CustomerForm";
import SupplementalInfo from "./SupplementalInfo";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";

const Checkout = () => {
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
            <CustomerForm />
            <SupplementalInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
