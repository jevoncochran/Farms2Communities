import styles from "./CustomerForm.module.scss";
import StateSelect from "../StateSelect";

const CustomerForm = () => {
  return (
    <div className={styles.cf}>
      <div className={styles["cf-header"]}>Customer Details</div>
      <form className={styles["cf-form"]}>
        <div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="first_name">First name</label>
            <input name="first_name" type="text" />
          </div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="last_name">Last name</label>
            <input name="last_name" type="text" />
          </div>
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="company">Company</label>
          <input name="company" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="address">Street Address</label>
          <input name="address_line1" type="text" />
          <input name="address_line2" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="city">City</label>
          <input name="city" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="state">State</label>
          <StateSelect />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="zip">Zip</label>
          <input name="zip" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="phone">Phone</label>
          <input name="phone" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="email">Email Address</label>
          <input name="email" type="text" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="password">Create Account Password</label>
          <input name="password" type="password" />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="password_confirm">Confirm Password</label>
          <input name="password_confirm" type="password" />
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
