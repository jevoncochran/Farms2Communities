import {
  ADMIN_LOGIN_START,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  RETRIEVE_SUBSCRIPTIONS_START,
  RETRIEVE_SUBSCRIPTIONS_SUCCESS,
} from "../actions";

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
    case ADMIN_LOGOUT: {
      return initialState;
    }
    case RETRIEVE_SUBSCRIPTIONS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RETRIEVE_SUBSCRIPTIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        subscriptions: action.payload,
      };
    }
    default:
      return state;
  }
};
