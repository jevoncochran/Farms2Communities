import { useEffect } from "react";
import styles from "./SupplementalInfo.module.scss";
import { connect } from "react-redux";

const SupplementalInfo = (props) => {
  useEffect(() => {
    console.log("The promo code is ", props.promoCode);
  }, [props.promoCode]);
  return (
    <div className={styles.si}>
      <form>
        <div className={styles["si-header"]}>
          {props.language === "en"
            ? "Additional Information"
            : "Información adicional"}
        </div>
        <div className={styles["si-input-div"]}>
          <label>
            {props.language === "en"
              ? "Order notes (optional)"
              : "Notas de la orden (opcional)"}
          </label>
          <input name="note" type="text" />
        </div>
      </form>
      <form>
        <div className={styles["si-header"]}>
          {props.language === "en"
            ? "Have a Promotional Code?"
            : "Tiene un código de descuento"}
        </div>
        <input
          name="code"
          type="text"
          value={props.promoCode}
          onChange={(e) => props.setPromoCode(e.target.value)}
        />
        <button>
          {props.langauge === "en" ? "APPLY COUPON" : "ACTIVAR CODIGO"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(SupplementalInfo);
