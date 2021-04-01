import styles from "./RecapAndPayment.module.scss";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";

const RecapAndPayment = (props) => {
  return (
    <div className={styles.rap}>
      <div className={styles["rap-header"]}>Your Order</div>
      <div className={styles["rap-label-div"]}>
        <p>Product</p>
        <p>Subtotal</p>
      </div>
      <div className={styles["rap-order-div"]}>
        <div className={styles["rap-product-div"]}>
          <div
            className={styles["rap-product-img"]}
            style={{
              backgroundImage: `url(${props.selectedProduct.main_image})`,
            }}
          ></div>
          <p>
            {props.selectedProduct.item} x {props.selectedProduct.quantity}
          </p>
        </div>
        <p
          className={styles["rap-product-subtotal"]}
        >{`${CurrencyFormatter.format(
          props.selectedProduct.price * props.selectedProduct.quantity,
          { currency: "USD" }
        )} / week`}</p>
      </div>
      <div className={styles["rap-total-div"]}>
        <p>Recurring total</p>
        <div className={styles["rap-charge-details"]}>
          <p>{`${CurrencyFormatter.format(
            props.selectedProduct.price * props.selectedProduct.quantity,
            { currency: "USD" }
          )}`}</p>
          <p className={styles["rap-charge-details-small"]}>
            First renewal: March 29, 2021
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.customer.selectedProduct,
  };
};

export default connect(mapStateToProps, {})(RecapAndPayment);
