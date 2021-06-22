import "../styles/globals.css";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistor } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
