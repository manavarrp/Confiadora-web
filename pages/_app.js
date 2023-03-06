import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { Fragment, useMemo } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const ComponentLayout = useMemo(
    () => (Component.getLayout ? Fragment : Layout),
    [Component.getLayout]
  );

  return (
    <Provider store={store}>
    <ToastContainer/>
      <ComponentLayout>
        <Component {...pageProps} />
      </ComponentLayout>
    </Provider>
  );
}

export default MyApp;
