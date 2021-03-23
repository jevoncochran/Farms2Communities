import axios from "axios";
import { apiRoot } from "../../utils/axios-config";

export const SET_LANG_START = "SET_LANG_START";
export const SET_LANG_SUCCESS = "SET_LANG_SUCCESS";
export const SET_PRODUCT_START = "SET_PRODUCT_START";
export const SET_PRODUCT_SUCCESS = "SET_PRODUCT_SUCCESS";
export const FINALIZE_ORDER_START = "FINALIZE_ORDER_START";
export const FINALIZE_ORDER_SUCCESS = "FINALIZE_ORDER_SUCCESS";

export const setLanguage = (language) => (dispatch) => {
  dispatch({ type: SET_LANG_START });
  dispatch({ type: SET_LANG_SUCCESS, payload: language });
};

export const setSelectedProduct = (product) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_START });
  dispatch({ type: SET_PRODUCT_SUCCESS, payload: product });
};

export const finalizeOrder = (customer) => (dispatch) => {
  dispatch({ type: FINALIZE_ORDER_START });
  // run axios .post to add new customer
  axios.post(`${apiRoot}/customers`, customer).then((res) => {
    console.log(res.data);
    dispatch({ type: FINALIZE_ORDER_SUCCESS });
  });
  // disapatch FINALIZE_ORDER_SUCCESS
};
