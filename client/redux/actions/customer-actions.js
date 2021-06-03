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
export const DELETE_SUBSCRIPTION_START = "DELETE_SUBSCRIPTION_START";
export const DELETE_SUBSCRIPTION_SUCCESS = "DELETE_SUBSCRIPTION_SUCCESS";
export const OPEN_MOBILE_NAV = "OPEN_MOBILE_NAV";
export const CLOSE_MOBILE_NAV = "CLOSE_MOBILE_NAV";

export const setLanguage = (language) => (dispatch) => {
  dispatch({ type: SET_LANG_START });
  dispatch({ type: SET_LANG_SUCCESS, payload: language });
};

export const setSelectedProduct = (product) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_START });
  dispatch({ type: SET_PRODUCT_SUCCESS, payload: product });
};

export const finalizeOrder =
  (customer, order, paymentInfo, subscription) => (dispatch) => {
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
        }
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   },
        // }
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
            let subscriptionId = res.data.id;
            axios
              .post(`${apiRoot}/customers`, {
                ...customer,
                stripe_id: res.data.customer,
                subscription_id: res.data.id,
                currently_subscribed: true,
              })
              .then((res) => {
                console.log(res.data);
                let account = {
                  id: res.data.id,
                  name: `${res.data.first_name} ${res.data.last_name}`,
                  email: res.data.email,
                  role: "customer",
                  subscriptionId,
                };
                console.log("account: ", account);
                // let customerId = res.data.id;
                // let customerName = `${res.data.first_name} ${res.data.last_name}`;
                // let customerEmail = res.data.email;
                // let customerRole = "customer";
                axios
                  .post(`${apiRoot}/orders`, {
                    ...order,
                    customer_id: res.data.id,
                  })
                  .then((res) => {
                    console.log(res.data);
                    dispatch({
                      type: FINALIZE_ORDER_SUCCESS,
                      payload: account,
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

export const cancelSubscription = (subscriptionId) => (dispatch) => {
  dispatch({ type: DELETE_SUBSCRIPTION_START });
  axios
    .delete(`${apiRoot}/stripe/subscription`, { data: { subscriptionId } })
    .then((res) => {
      console.log(res.data);
    });
};

export const openMobileNav = () => (dispatch) => {
  dispatch({ type: OPEN_MOBILE_NAV });
};

export const closeMobileNav = () => (dispatch) => {
  dispatch({ type: CLOSE_MOBILE_NAV });
};
