import axios from "axios";
import { apiRoot } from "../../utils/axios-config";

export const SET_LANG_START = "SET_LANG_START";
export const SET_LANG_SUCCESS = "SET_LANG_SUCCESS";
export const SET_PRODUCT_START = "SET_PRODUCT_START";
export const SET_PRODUCT_SUCCESS = "SET_PRODUCT_SUCCESS";
export const FINALIZE_ORDER_START = "FINALIZE_ORDER_START";
export const FINALIZE_ORDER_SUCCESS = "FINALIZE_ORDER_SUCCESS";
export const SET_PRODUCT_QUANTITY_START = "SET_PRODUCT_QUANTITY_START";
export const SET_PRODUCT_QUANTITY_SUCCESS = "SET_PRODUCT_QUANTITY_SUCCESS";
export const CLEAR_SELECTED_PRODUCT_START = "CLEAR_SELECTED_PRODUCT_START";
export const CLEAR_SELECTED_PRODUCT_SUCCESS = "CLEAR_SELECTED_PRODUCT_SUCCESS";
export const CUSTOMER_LOGIN_START = "CUSTOMER_LOGIN_START";
export const CUSTOMER_LOGIN_SUCCESS = "CUSTOMER_LOGIN_SUCCESS";

export const setLanguage = (language) => (dispatch) => {
  dispatch({ type: SET_LANG_START });
  dispatch({ type: SET_LANG_SUCCESS, payload: language });
};

export const setSelectedProduct = (product) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_START });
  dispatch({ type: SET_PRODUCT_SUCCESS, payload: product });
};

export const finalizeOrder = (customer, order, paymentInfo, subscription) => (
  dispatch
) => {
  dispatch({ type: FINALIZE_ORDER_START });
  axios
    .post(
      `${apiRoot}/stripe/customer`,
      {
        stripeId: customer.stripe_id,
        name: `${customer.first_name} ${customer.last_name}`,
        email: customer.email,
        paymentMethodId: paymentInfo.paymentMethodId,
        shipping: {
          name: `${customer.first_name} ${customer.last_name}`,
          address: {
            line1: customer.address,
            city: customer.city,
            state: customer.state,
            postal_code: customer.zip,
          },
        },
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((res) => {
      console.log(res);
      axios
        .post(`${apiRoot}/stripe/subscription`, {
          stripeCustomerId: res.data.id,
          amount: paymentInfo.amount,
          stripePriceId: subscription,
        })
        .then((res) => {
          console.log(res.data);
          axios
            .post(`${apiRoot}/customers`, {
              ...customer,
              stripe_id: res.data.customer,
              subscription_id: res.data.id,
              currently_subscribed: true,
            })
            .then((res) => {
              console.log(res.data);
              axios
                .post(`${apiRoot}/orders`, {
                  ...order,
                  customer_id: res.data.id,
                })
                .then((res) => {
                  console.log(res.data);
                  dispatch({ type: FINALIZE_ORDER_SUCCESS });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setProductQuantity = (quantity) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_QUANTITY_START });
  dispatch({ type: SET_PRODUCT_QUANTITY_SUCCESS, payload: quantity });
};

export const clearSelectedProduct = () => (dispatch) => {
  dispatch({ type: CLEAR_SELECTED_PRODUCT_START });
  dispatch({ type: CLEAR_SELECTED_PRODUCT_SUCCESS });
};

export const customerLogin = (credentials) => (dispatch) => {
  dispatch({ type: CUSTOMER_LOGIN_START });
  axios.post(`${apiRoot}/auth/login/customer`, credentials).then((res) => {
    console.log(res.data);
    dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: res.data });
  });
};
