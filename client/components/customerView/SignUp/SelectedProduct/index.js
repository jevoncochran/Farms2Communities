import styles from "./SelectedProduct.module.scss";
import Layout from "../../Layout";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";

const SelectedProduct = (props) => {
  return (
    <Layout>
      <div className={styles.sp}>
        <div
          className={styles["sp-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["sp-header-text"]}>
            {props.selectedProduct.item}
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
              {props.selectedProduct.summary}
            </p>
            <p className={styles["sp-text"]} style={{ marginBottom: "4%" }}>
              {`${CurrencyFormatter.format(props.selectedProduct.price, {
                currency: "USD",
              })}/week`}
            </p>
            <p className={styles["sp-text"]}>
              {props.selectedProduct.description1}
            </p>
            <p className={styles["sp-text"]}>
              {props.selectedProduct.description2}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.customer.selectedProduct,
  };
};

export default connect(mapStateToProps, {})(SelectedProduct);
