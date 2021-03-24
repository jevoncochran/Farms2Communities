import { useState, useEffect } from "react";
import styles from "./SignUp.module.scss";
import Layout from "../Layout";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import axios from "axios";
import { apiRoot } from "../../../utils/axios-config";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";
import { setSelectedProduct } from "../../../redux/actions";
import { useRouter } from "next/router";

const SignUp = (props) => {
  const router = useRouter();
  const [baskets, setBaskets] = useState(null);
  const [filteredBaskets, setFilteredBaskets] = useState(null);

  //   const chooseProduct = (product) => {
  //     props.setSelectedProduct(product);
  //   };

  const routeToSelectedProduct = (product) => {
    props.setSelectedProduct(product);
    // router.push(`/signup/${props.selectedProduct.route}`);
  };

  useEffect(() => {
    axios
      .get(`${apiRoot}/products`)
      .then((res) => {
        setBaskets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (baskets) {
      setFilteredBaskets(
        baskets.filter((basket) => basket.item !== "Donation")
      );
    }
  }, [baskets]);

  useEffect(() => {
    if (props.selectedProduct) {
      router.push(`/signup/${props.selectedProduct.route}`);
    }
  }, [props.selectedProduct]);

  return (
    <Layout>
      <div className={styles.signup}>
        <div
          className={styles["signup-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["signup-header-text"]}>
            Sign up for produce delivery
          </p>
        </div>
        <div className={styles["signup-baskets-cont"]}>
          {filteredBaskets &&
            filteredBaskets.map((basket) => (
              <div
                key={basket.id}
                className={styles["basket-card"]}
                onClick={() => routeToSelectedProduct(basket)}
              >
                <div
                  className={styles["basket-card-img"]}
                  style={{ backgroundImage: `url(${basket.main_image})` }}
                ></div>
                <div className={styles["basket-card-text-cont"]}>
                  <p>{basket.item}</p>
                  <p>{basket.summary}</p>
                  <p>
                    {CurrencyFormatter.format(basket.price, {
                      currency: "USD",
                    })}
                  </p>
                </div>
              </div>
            ))}
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

export default connect(mapStateToProps, { setSelectedProduct })(SignUp);
