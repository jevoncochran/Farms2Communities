import { useEffect, useState } from "react";
import styles from "./SelectedProduct.module.scss";
import Layout from "../../Layout";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import CurrencyFormatter from "currencyformatter.js";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { setProductQuantity } from "../../../../redux/actions";

const SelectedProduct = (props) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const proceedToCheckout = () => {
    router.push("/checkout");
  };

  useEffect(() => {
    props.setProductQuantity(quantity);
  }, [quantity]);

  return (
    <Layout>
      <div className={styles.sp}>
        <div
          className={styles["sp-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["sp-header-text"]}>
            {props.language === "en"
              ? props.selectedProduct.item
              : props.selectedProduct.item_es}
          </p>
        </div>
        <div className={styles["sp-content"]}>
          <div
            style={{
              backgroundImage: `url(${props.selectedProduct.main_image})`,
            }}
            className={styles["sp-img"]}
          ></div>
          <div className={styles["sp-text-div"]}>
            <p
              className={styles["sp-text-large"]}
              style={{ marginBottom: "2%" }}
            >
              {props.language === "en"
                ? props.selectedProduct.summary
                : props.selectedProduct.summary_es}
            </p>
            <p className={styles["sp-text"]} style={{ marginBottom: "4%" }}>
              {`${CurrencyFormatter.format(props.selectedProduct.price, {
                currency: "USD",
              })}/week`}
            </p>
            <p className={styles["sp-text"]}>
              {props.language === "en"
                ? props.selectedProduct.description1
                : props.selectedProduct.description1_es}
            </p>
            <p className={styles["sp-text"]}>
              {props.language === "en"
                ? props.selectedProduct.description2
                : props.selectedProduct.description2_es}
            </p>
            <div className={styles["sp-btn-cont"]}>
              <div className={styles["sp-quantity-cont"]}>
                <div
                  className={styles["sp-quantity-selector"]}
                  onClick={decrement}
                >
                  <p>-</p>
                </div>
                <div className={styles["sp-quantity"]}>
                  <p>{quantity}</p>
                </div>
                <div
                  className={styles["sp-quantity-selector"]}
                  onClick={increment}
                >
                  <p>+</p>
                </div>
              </div>
              <button
                className={styles["sp-signup-btn"]}
                onClick={proceedToCheckout}
              >
                {props.language === "en" ? "Sign up now" : "REGISTRESE AHORA"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.customer.selectedProduct,
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, { setProductQuantity })(
  SelectedProduct
);
