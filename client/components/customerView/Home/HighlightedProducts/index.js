import { useState, useEffect } from "react";
import styles from "./HighlightedProducts.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import axios from "axios";
import { apiRoot } from "../../../../utils/axios-config";
import Link from "next/link";
import { text } from "./text";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setSelectedProduct } from "../../../../redux/actions";

const HighlightedProducts = (props) => {
  const router = useRouter();
  const [baskets, setBaskets] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiRoot}/products`)
      .then((res) => {
        setBaskets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (props.selectedProduct) {
      router.push(`/signup/${props.selectedProduct.route}`);
      console.log("This is from the Highlighted Products component");
    }
  }, [props.selectedProduct]);

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
        <button
          className={styles["hp-product-btn"]}
          onClick={() => props.setSelectedProduct(baskets[0])}
        >
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
        <button
          className={styles["hp-product-btn"]}
          onClick={() => props.setSelectedProduct(baskets[1])}
        >
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
        <Link href="/donate">
          <button className={styles["hp-product-btn"]}>
            {text[props.language].box3.btn}
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
    selectedProduct: state.customer.selectedProduct,
  };
};

export default connect(mapStateToProps, { setSelectedProduct })(
  HighlightedProducts
);
