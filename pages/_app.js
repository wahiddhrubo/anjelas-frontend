import "react-range-slider-input/dist/style.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
