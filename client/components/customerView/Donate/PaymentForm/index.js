import { useState, useEffect } from "react";
import styles from "./PaymentForm.module.scss";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { apiRoot } from "../../../../utils/axios-config";
import axios from "axios";

import React from "react";

export default function PaymentForm(props) {
  //   const [card, setCard] = useState({ number: "", expiration: "", cvc: "" });

  //   const [curExpLength, setCurExpLength] = useState(card.expiration.length);
  //   const [expBackspace, setExpBackspace] = useState(false);

  //   const handleCardChange = (e) => {
  //     if (e.target.name !== "expiration") {
  //       setCard({ ...card, [e.target.name]: e.target.value });
  //     } else {
  //       setCard({ ...card, [e.target.name]: formatExp(e.target.value) });
  //     }
  //   };

  //   const formatExp = (exp) => {
  //     const expArr = exp.split("");
  //     if (!expBackspace) {
  //       if (expArr.length === 2) {
  //         expArr.push("/");
  //       }
  //     }
  //     return expArr.join("");
  //   };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      //   card: {
      //     number: card.number,
      //     exp_month: `${card.expiration[0]}${card.expiration[1]}`,
      //     exp_year: `20${card.expiration[3]}${card.expiration[4]}`,
      //     cvc: card.cvc,
      //   },
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${apiRoot}/pay`, {
          amount: props.amount * 100,
          id,
        });
        if (response.data.success) {
          console.log("Successful payment!");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  //   useEffect(() => {
  //     console.log("card: ", card);
  //   }, [card]);

  //   useEffect(() => {
  //     // curExpLength
  //     if (curExpLength < card.expiration.length) {
  //       setExpBackspace(false);
  //       setCurExpLength(curExpLength + 1);
  //     } else {
  //       setExpBackspace(true);
  //       setCurExpLength(curExpLength - 1);
  //     }
  //     console.log("comparison ran");
  //   }, [card.expiration]);

  return (
    <div className={styles.pf}>
      <form onSubmit={handleSubmit}>
        <div className={styles["pf-label-cont"]}>
          <p>Pay with your credit card</p>
        </div>
        {/* <div className={styles["pf-input-cont"]}>
          <div className={styles["pf-input-div"]}>
            <label htmlFor="number">Card Number</label>
            <input
              type="text"
              name="number"
              className={styles["pf-input"]}
              onChange={handleCardChange}
            />
          </div>
          <div className={styles["pf-input-div"]}>
            <label htmlFor="expiration">Expiration Date</label>
            <input
              type="text"
              name="expiration"
              value={card.expiration}
              className={styles["pf-input"]}
              onChange={handleCardChange}
            />
          </div>
          <div className={styles["pf-input-div"]}>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              name="cvc"
              className={styles["pf-input"]}
              onChange={handleCardChange}
            />
          </div>
        </div> */}
        <CardElement />
        <button className={styles["pf-btn"]}>place order</button>
      </form>
    </div>
  );
}
