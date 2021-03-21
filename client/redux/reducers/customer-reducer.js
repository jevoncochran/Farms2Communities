import {
  SET_LANG_START,
  SET_LANG_SUCCESS,
  SET_PRODUCT_START,
  SET_PRODUCT_SUCCESS,
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
    default:
      return state;
  }
};
