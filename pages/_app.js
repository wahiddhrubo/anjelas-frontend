import "react-range-slider-input/dist/style.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/layout/navBar.js";
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import { useEffect } from "react";
import { LOAD_USER } from "../store/saga/actions";

function MyApp({ Component, pageProps }) {
  const navMenu = [
    { text: "Packages", link: "/packages" },
    { text: "Offers", link: "/offers" },
    { text: "Shop", link: "/shop" },
    { text: "Catering", link: "/catering" },
    { text: "About Us", link: "/about-Us" },
  ];

  return (
    <Provider store={store}>
      <div className="px-[100px] text-body-md static">
        <Navbar menu={navMenu} />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
