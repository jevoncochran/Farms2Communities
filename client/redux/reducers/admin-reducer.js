import { ADMIN_LOGIN_START, ADMIN_LOGIN_SUCCESS } from "../actions";

const initialState = {
  language: "en",
  isLoading: false,
};

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        account: action.payload,
        loggedIn: true,
      };
    default:
      return state;
  }
};
