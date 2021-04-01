import axios from "axios";
import { apiRoot } from "../../utils/axios-config";

export const ADMIN_LOGIN_START = "ADMIN_LOGIN_START";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";

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
