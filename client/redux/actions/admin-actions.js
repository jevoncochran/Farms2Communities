import axios from "axios";
import { apiRoot } from "../../utils/axios-config";

export const ADMIN_LOGIN_START = "ADMIN_LOGIN_START";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";
export const RETRIEVE_SUBSCRIPTIONS_START = "RETRIEVE_SUBSCRIPTIONS_START";
export const RETRIEVE_SUBSCRIPTIONS_SUCCESS = "RETRIEVE_SUBSCRIPTIONS_SUCCESS";

export const adminLogin = (credentials) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_START });
  axios
    .post(`${apiRoot}/auth/login/admin`, credentials)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.account });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adminLogout = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
};

export const getSubscriptions = () => (dispatch) => {
  dispatch({ type: RETRIEVE_SUBSCRIPTIONS_START });
  axios
    .get(`${apiRoot}/subscriptions`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: RETRIEVE_SUBSCRIPTIONS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
