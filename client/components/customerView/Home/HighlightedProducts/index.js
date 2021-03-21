import styles from "./HighlightedProducts.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import { text } from "./text";
import { connect } from "react-redux";

const HighlightedProducts = (props) => {
  return (
    <div className={styles.hp} style={{ backgroundImage: `url(${recipeBg})` }}>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box1.item}
          </p>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box1.price}
          </p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p className={styles["hp-product-text"]}>
            {text[props.language].box1.p1}
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>
          {text[props.language].box1.btn}
        </button>
      </div>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box2.item}
          </p>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box2.price}
          </p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p
            className={styles["hp-product-text"]}
            style={{ marginBottom: "3%" }}
          >
            {text[props.language].box2.p1}
          </p>
          <p className={styles["hp-product-text"]}>
            {text[props.language].box2.p2}
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>
          {text[props.language].box2.btn}
        </button>
      </div>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box3.item}
          </p>
          <p className={styles["hp-product-text-large"]}>
            {text[props.language].box3.price}
          </p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p
            className={styles["hp-product-text"]}
            style={{ marginBottom: "3%" }}
          >
            {text[props.language].box3.p1}
          </p>
          <p
            className={styles["hp-product-text"]}
            style={{ textAlign: "center" }}
          >
            {text[props.language].box3.p2}
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>
          {text[props.language].box3.btn}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(HighlightedProducts);
