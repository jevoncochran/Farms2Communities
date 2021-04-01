import { useState, useEffect } from "react";
import styles from "./Donate.module.scss";
import Layout from "../Layout";
import StripeContainer from "./StripeContainer";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import produceHeart from "../../../public/assets/images/donate/produce-heart.jpg";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";

const Donate = (props) => {
  const [amount, setAmount] = useState(null);
  const [chooseAmount, setChooseAmount] = useState(false);
  const [showAmountForm, setShowAmountForm] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const selectChangeHandler = (e) => {
    if (e.target.value === "choose") {
      setAmount(null);
      setChooseAmount(true);
    } else {
      setAmount(e.target.value);
      setChooseAmount(false);
    }
  };

  const inputChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const renderPaymentForm = (e) => {
    e.preventDefault();
    setShowAmountForm(false);
    setShowPaymentForm(true);
  };

  useEffect(() => {
    console.log("amount: ", amount);
    console.log("chooseAmount: ", chooseAmount);
  }, [amount, chooseAmount]);

  return (
    <Layout>
      <div className={styles.donate}>
        <div
          className={styles["donate-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["donate-header-text"]}>
            {props.language === "en" ? "Donate" : "Donar"}
          </p>
        </div>
        <div className={styles["donate-content"]}>
          <img src={produceHeart} alt="produce heart" />
          {showAmountForm && (
            <form className={styles["donate-form"]}>
              <p
                className={styles["donate-text-large"]}
                style={{ marginBottom: "6%" }}
              >
                {props.language === "en"
                  ? "Donate To Families in Need"
                  : "Done para familias necesitadas"}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6%",
                }}
              >
                <label
                  htmlFor="preset_donations"
                  className={styles["donate-text"]}
                  style={{ marginRight: "20%" }}
                >
                  {props.language === "en"
                    ? "Preset Donations"
                    : "Donaciones preestablecidas"}
                </label>
                <select name="preset_donations" onChange={selectChangeHandler}>
                  <option>
                    {props.language === "en"
                      ? "Choose an option"
                      : "Escoge una opción"}
                  </option>
                  <option value={25}>$25</option>
                  <option value={50}>$50</option>
                  <option value={100}>$100</option>
                  <option value={200}>$200</option>
                  <option value="choose">
                    {props.language === "en"
                      ? "Choose your own amount"
                      : "Escoge otra cantidad"}
                  </option>
                </select>
              </div>
              {chooseAmount && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6%",
                  }}
                >
                  <label
                    htmlFor="chosen_donation"
                    className={styles["donate-text"]}
                    style={{ marginBottom: "1%" }}
                  >
                    {props.language === "en"
                      ? "Choose your own donation amount"
                      : "Escoge otra cantidad"}
                  </label>
                  <input
                    type="text"
                    name="chosen_donation"
                    style={{ width: "50%" }}
                    value={
                      amount
                        ? CurrencyFormatter.format(amount, { currency: "USD" })
                        : CurrencyFormatter.format(0, { currency: "USD" })
                    }
                    onChange={inputChangeHandler}
                  />
                </div>
              )}
              <button onClick={renderPaymentForm}>
                {props.language === "en" ? "DONATE NOW!" : "¡DONE AHORA!"}
              </button>
            </form>
          )}
          {showPaymentForm && <StripeContainer amount={amount} />}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(Donate);
