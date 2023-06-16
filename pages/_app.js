import "react-range-slider-input/dist/style.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/layout/navBar.js";
import { ToastContainer } from "react-toastify";
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import Head from "next/head";
import ContactIcon from "../components/contactIcon";
import Footer from "../components/layout/footer";
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
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />

        <title>Anjela&apos;s Kitchen</title>
        <meta name="description" content="Home Food Delivery Store" />
      </Head>
      <ToastContainer />
      <Navbar menu={navMenu} />
      <div className="lg:px-[100px] px-4 text-body-md text-[14px] md:text-[16px] static">
        <Component {...pageProps} />
      </div>
      <Footer />
      <ContactIcon />
    </Provider>
  );
}

export default MyApp;
