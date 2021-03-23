import styles from "./CustomerForm.module.scss";
import StateSelect from "../StateSelect";

const CustomerForm = (props) => {
  const inputChangeHandler = (e) => {
    if (
      e.target.name !== "address_line1" &&
      e.target.name !== "address_line2"
    ) {
      props.setCustomer({
        ...props.customer,
        [e.target.name]: e.target.value,
      });
    } else {
      if (e.target.name === "address_line1") {
        props.setCustomer({
          ...props.customer,
          address: e.target.value,
        });
      } else {
        props.setAddressLine2(e.target.value);
      }
    }
  };
  return (
    <div className={styles.cf}>
      <div className={styles["cf-header"]}>Customer Details</div>
      <form className={styles["cf-form"]}>
        <div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="first_name">First name</label>
            <input
              name="first_name"
              type="text"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="last_name">Last name</label>
            <input name="last_name" type="text" onChange={inputChangeHandler} />
          </div>
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="company">Company</label>
          <input name="company" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="address">Street Address</label>
          <input
            name="address_line1"
            type="text"
            onChange={inputChangeHandler}
          />
          <input
            name="address_line2"
            type="text"
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="city">City</label>
          <input name="city" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="state">State</label>
          <StateSelect
            customer={props.customer}
            setCustomer={props.setCustomer}
          />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="zip">Zip</label>
          <input name="zip" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="phone">Phone</label>
          <input name="phone" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="email">Email Address</label>
          <input name="email" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="password">Create Account Password</label>
          <input
            name="password"
            type="password"
            onChange={inputChangeHandler}
          />
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
