import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getUser,
  getProducts,
  getSingleProduct,
  getOrders,
} from "../../store/selectors";
import Loader from "../loader";
import Navbar from "../layout/navBar.js";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import ContactIcon from "../contactIcon";
import Footer from "../layout/footer";
import { getPriceAndQuantity } from "../../store/slice/cart";
import { LOAD_USER } from "../../store/saga/actions";
import { useState } from "react";
import SearchDiv from "./searchDiv";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [searchMode, setSearchMode] = useState(false);
  const router = useRouter();
  const { route } = router;
  const navPage = ["about-us"];
  const navWhiteMode = navPage.includes(route.replace("/", ""));

  const navMenu = [
    { text: "Packages", link: "/packages" },
    { text: "Offers", link: "/offers" },
    { text: "Shop", link: "/shop" },
    { text: "Catering", link: "/catering" },
    { text: "About Us", link: "/about-Us" },
  ];
  const dispatch = useDispatch();
  const { loading: loadingCart, items, quantity } = useSelector(getCart);
  const {
    loading: loadingUser,
    isAuthenticated,
    error: userError,
  } = useSelector(getUser);

  const { loading: loadingProducts } = useSelector(getProducts);
  const { loading: loadingSingleProduct } = useSelector(getSingleProduct);
  const { loading: loadingOrders } = useSelector(getOrders);

  useEffect(() => {
    dispatch(getPriceAndQuantity());
  }, [items]);

  const loading =
    loadingCart ||
    loadingUser ||
    loadingProducts ||
    loadingSingleProduct ||
    loadingOrders;

  useEffect(() => {
    dispatch({ type: LOAD_USER });
  }, [isAuthenticated]);

  useEffect(() => {
    toast.error(userError, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, [userError]);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Anjela&apos;s Kitchen</title>
        <meta name="description" content="Home Food Delivery Store" />
      </Head>
      <ToastContainer />
      {loading && (
        <div className=" bg-white top-0 w-screen h-screen fixed z-[100] ">
          <div className="w-3/4 overflow-x-clip h-screen mx-auto flex flex-wrap content-center  justify-center">
            <div className="w-1/2 ">
              <Loader />
            </div>
          </div>
        </div>
      )}

      <>
        <Navbar
          menu={navMenu}
          setSearchMode={setSearchMode}
          searchMode={searchMode}
        />
        {searchMode && (
          <div className="lg:px-[100px] px-4 text-body-md text-[14px] md:text-[16px] static">
            <SearchDiv />
          </div>
        )}

        <div
          style={{ display: searchMode ? "none" : "" }}
          className="lg:px-[100px] px-4 text-body-md text-[14px] md:text-[16px] static"
        >
          {children}
        </div>
        <Footer />
        <ContactIcon />
      </>
    </div>
  );
}
