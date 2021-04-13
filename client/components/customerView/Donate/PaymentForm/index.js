import { useState, useEffect } from "react";
import styles from "./PaymentForm.module.scss";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { apiRoot } from "../../../../utils/axios-config";
import axios from "axios";

import React from "react";

export default function PaymentForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
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

  return (
    <div className={styles.pf}>
      <form onSubmit={handleSubmit}>
        <div className={styles["pf-label-cont"]}>
          <p>Pay with your credit card</p>
        </div>
        <CardElement />
        <button className={styles["pf-btn"]}>place order</button>
      </form>
    </div>
  );
}
