import { useState, useEffect } from "react";
import styles from "./CustomerDash.module.scss";
import Layout from "../Layout";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import CurrencyFormatter from "currencyformatter.js";
import axios from "axios";
import { apiRoot } from "../../../utils/axios-config";
import { connect } from "react-redux";
import { cancelSubscription } from "../../../redux/actions/index";

const CustomerDash = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("subscription");
  const [subscription, setSubscription] = useState({});
  const [nextCharge, setNextCharge] = useState("");

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

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log("props.customerAccount.id: ", props.customerAccount.id);
    axios
      .get(`${apiRoot}/customers/${props.customerAccount.id}/subscription`)
      .then((res) => {
        console.log("response: ", res.data);
        setSubscription(res.data);
        setQuantity(res.data.quantity);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (subscription.subscription_id) {
      axios
        .get(`${apiRoot}/stripe/subscription/${subscription.subscription_id}`)
        .then((res) => {
          console.log(res.data);
          const curPerEndDate = new Date(
            res.data.current_period_end * 1000
          ).toLocaleDateString("en-US");
          setNextCharge(curPerEndDate);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [subscription]);

  useEffect(() => {
    console.log("nextCharge: ", nextCharge);
  }, [nextCharge]);

  return (
    <Layout>
      <div className={styles.cd}>
        <div
          className={styles["cd-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <div className={styles["cd-header-text"]}>Dashboard</div>
        </div>
        <div className={styles["cd-content"]}>
          <div className={styles["cd-content-title-div"]}>
            <p onClick={() => showTab("subscription")}>Subscription</p>
            <p onClick={() => showTab("account")}>Account</p>
          </div>
          {activeTab === "subscription" ? (
            <div className={styles["cd-subscription-cont"]}>
              <div
                className={styles["cd-subscription-img"]}
                style={{
                  backgroundImage: `url(${subscription.main_image})`,
                }}
              ></div>
              <div className={styles["cd-subscription-text-cont"]}>
                <p className={styles["cd-subscription-title"]}>
                  {subscription.item}
                </p>
                <p className={styles["cd-subscription-price"]}>
                  {CurrencyFormatter.format(subscription.price, {
                    currency: "usd",
                  })}
                  /week x {subscription.quantity}
                </p>
                <p className={styles["cd-subscription-p"]}>
                  {subscription.description1}
                </p>
                <p className={styles["cd-subscription-p"]}>
                  {subscription.description2}
                </p>
                <p className={styles["cd-subscription-p"]}>
                  Next recurring charge: {nextCharge}
                </p>
                <div className={styles["cd-subscription-btn-cont"]}>
                  <div className={styles["cd-quantity-cont"]}>
                    <div
                      className={styles["cd-quantity-selector"]}
                      onClick={decrement}
                    >
                      <p>-</p>
                    </div>
                    <div className={styles["cd-quantity"]}>
                      <p>{quantity}</p>
                    </div>
                    <div
                      className={styles["cd-quantity-selector"]}
                      onClick={increment}
                    >
                      <p>+</p>
                    </div>
                  </div>
                  <button
                    className={styles["cd-subscription-btn"]}
                    style={{
                      background:
                        quantity === subscription.quantity
                          ? "#fff"
                          : "linear-gradient(to top, #d6d6d6, #e8e8e8)",
                      opacity: quantity === subscription.quantity ? "0.7" : "1",
                      border:
                        quantity === subscription.quantity
                          ? "1px solid #e0dede"
                          : "none",
                    }}
                    disabled={quantity === subscription.quantity ? true : false}
                    onClick={() => console.log("button click working!")}
                  >
                    Update subscription
                  </button>
                  <button
                    className={styles["cd-subscription-btn"]}
                    onClick={() =>
                      props.cancelSubscription(
                        props.customerAccount.subscriptionId
                      )
                    }
                  >
                    Cancel subscription
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles["cd-account-cont"]}>
              <div className={styles["cd-account-detail-div"]}>
                <p className={styles["cd-account-text"]}>Name</p>
                <p className={styles["cd-account-text"]}>
                  {subscription.first_name} {subscription.last_name}
                </p>
              </div>
              <div className={styles["cd-account-detail-div"]}>
                <p className={styles["cd-account-text"]}>Email</p>
                <p className={styles["cd-account-text"]}>
                  {subscription.email}
                </p>
              </div>
              <div className={styles["cd-account-detail-div"]}>
                <p className={styles["cd-account-text"]}>Password</p>
                <button
                  className={styles["cd-account-text"]}
                  style={{
                    padding: "2%",
                    textTransform: "uppercase",
                    borderRadius: "6px",
                    border: "none",
                    background: "linear-gradient(to top, #d6d6d6, #e8e8e8)",
                    color: "#787878",
                  }}
                >
                  change
                </button>
              </div>
              <div className={styles["cd-account-detail-div"]}>
                <p className={styles["cd-account-text"]}>Company</p>
                <p className={styles["cd-account-text"]}></p>
              </div>
              <div className={styles["cd-account-detail-div"]}>
                <p className={styles["cd-account-text"]}>Address</p>
                <div className={styles["cd-address-div"]}>
                  <p
                    className={styles["cd-account-address"]}
                    style={{ width: "100%" }}
                  >
                    {subscription.address}
                  </p>
                  <p
                    className={styles["cd-account-address"]}
                    style={{ width: "100%" }}
                  >
                    {subscription.city}, {subscription.state} {subscription.zip}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    customerAccount: state.customer.account,
  };
};

export default connect(mapStateToProps, { cancelSubscription })(CustomerDash);
