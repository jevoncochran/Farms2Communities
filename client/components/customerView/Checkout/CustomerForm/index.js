import styles from "./CustomerForm.module.scss";
import StateSelect from "../StateSelect";
import { connect } from "react-redux";

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
      <div className={styles["cf-header"]}>
        {props.language === "en" ? "Customer Details" : "Detalles del cliente"}
      </div>
      <form className={styles["cf-form"]}>
        <div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="first_name">
              {props.language === "en" ? "First name" : "Nombre"}
            </label>
            <input
              name="first_name"
              type="text"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles["cf-input-div"]}>
            <label htmlFor="last_name">
              {props.language === "en" ? "Last name" : "Apellido"}
            </label>
            <input name="last_name" type="text" onChange={inputChangeHandler} />
          </div>
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="company">
            {props.language === "en" ? "Company" : "Empresa"}
          </label>
          <input name="company" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="address">
            {props.language === "en" ? "Street Address" : "Dirección"}
          </label>
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
          <label htmlFor="city">
            {props.language === "en" ? "City" : "Ciudad"}
          </label>
          <input name="city" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="state">
            {props.language === "en" ? "State" : "Estado"}
          </label>
          <StateSelect
            customer={props.customer}
            setCustomer={props.setCustomer}
          />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="zip">
            {props.language === "en" ? "Zip" : "Código postal"}
          </label>
          <input name="zip" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="phone">
            {props.language === "en" ? "Phone" : "Teléfono"}
          </label>
          <input name="phone" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="email">
            {props.language === "en" ? "Email Address" : "Correo electrónico"}
          </label>
          <input name="email" type="text" onChange={inputChangeHandler} />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="password">
            {props.language === "en"
              ? "Create Account Password"
              : "Crear seña para su cuenta"}
          </label>
          <input
            name="password"
            type="password"
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles["cf-input-div"]}>
          <label htmlFor="password_confirm">
            {props.language === "en" ? "Confirm Password" : "Confirmar seña"}
          </label>
          <input name="password_confirm" type="password" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(CustomerForm);
