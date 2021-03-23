import styles from "./SupplementalInfo.module.scss";

const SupplementalInfo = () => {
  return (
    <div className={styles.si}>
      <form>
        <div className={styles["si-header"]}>Additional Information</div>
        <div className={styles["si-input-div"]}>
          <label>Order notes (optional)</label>
          <input name="note" type="text" />
        </div>
      </form>
      <form>
        <div className={styles["si-header"]}>Have a Promotional Code?</div>
        <input name="code" type="text" />
        <button>APPLY COUPON</button>
      </form>
    </div>
  );
};

export default SupplementalInfo;
