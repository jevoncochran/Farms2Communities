import {
  SET_LANG_START,
  SET_LANG_SUCCESS,
  SET_PRODUCT_START,
  SET_PRODUCT_SUCCESS,
  SET_PRODUCT_QUANTITY_START,
  SET_PRODUCT_QUANTITY_SUCCESS,
  CLEAR_SELECTED_PRODUCT_START,
  CLEAR_SELECTED_PRODUCT_SUCCESS,
  CUSTOMER_LOGIN_START,
  CUSTOMER_LOGIN_SUCCESS,
} from "../actions";

const initialState = {
  language: "en",
  isLoading: false,
  selectedProduct: null,
};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LANG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        language: action.payload,
      };
    case SET_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedProduct: action.payload,
      };
    case SET_PRODUCT_QUANTITY_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCT_QUANTITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedProduct: {
          ...state.selectedProduct,
          quantity: action.payload,
        },
      };
    case CLEAR_SELECTED_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_SELECTED_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedProduct: null,
      };
    case CUSTOMER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        account: action.payload.account,
        loggedIn: true,
      };
    default:
      return state;
  }
};
