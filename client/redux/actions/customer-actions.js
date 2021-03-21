export const SET_LANG_START = "SET_LANG_START";
export const SET_LANG_SUCCESS = "SET_LANG_SUCCESS";
export const SET_PRODUCT_START = "SET_PRODUCT_START";
export const SET_PRODUCT_SUCCESS = "SET_PRODUCT_SUCCESS";

export const setLanguage = (language) => (dispatch) => {
  dispatch({ type: SET_LANG_START });
  dispatch({ type: SET_LANG_SUCCESS, payload: language });
};

export const setSelectedProduct = (product) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_START });
  dispatch({ type: SET_PRODUCT_SUCCESS, payload: product });
};
