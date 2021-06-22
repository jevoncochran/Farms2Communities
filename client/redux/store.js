import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "../storage";

const persistConfig = {
  timeout: 0,
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

export default store;
