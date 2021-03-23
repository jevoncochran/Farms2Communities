import styles from "./RecapAndPayment.module.scss";

const RecapAndPayment = () => {
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
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/farms2communities.appspot.com/o/images%2Fbox-option1.jpg?alt=media&token=bae8c79b-89ab-42b2-9637-3f7dd9b48e6a)`,
            }}
          ></div>
          <p>Community Support Box x 2</p>
        </div>
        <p className={styles["rap-product-subtotal"]}>$70.00 / week</p>
      </div>
      <div className={styles["rap-total-div"]}>
        <p>Recurring total</p>
        <div className={styles["rap-charge-details"]}>
          <p>$70.00 / week</p>
          <p className={styles["rap-charge-details-small"]}>
            First renewal: March 29, 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecapAndPayment;
