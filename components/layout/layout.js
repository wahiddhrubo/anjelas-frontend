import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getUser,
  getProducts,
  getSingleProduct,
  getOrders,
  getCoupon,
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
  const route = useRouter();

  const navless_page = ["/catering", "/contact-us"].includes(route.pathname);

  const navMenu = [
    { text: "Packages", link: "/packages" },
    { text: "Shop", link: "/shop" },
    { text: "Catering", link: "/catering" },
    { text: "About Us", link: "/about-us" },
  ];
  const dispatch = useDispatch();
  const { items, quantity } = useSelector(getCart);
  const {
    loading: loadingUser,
    isAuthenticated,
    error: userError,
  } = useSelector(getUser);

  const { loading: loadingProducts } = useSelector(getProducts);
  const { loading: loadingSingleProduct } = useSelector(getSingleProduct);
  const { loading: loadingOrders } = useSelector(getOrders);
  const {
    loading: loadingCoupon,
    sucess: couponSucess,
    error: couponError,
  } = useSelector(getCoupon);

  useEffect(() => {
    dispatch(getPriceAndQuantity());
  }, [items]);

  const loading =
    loadingUser ||
    loadingProducts ||
    loadingSingleProduct ||
    loadingOrders ||
    loadingCoupon;
  const d = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const today = new Date();
  console.log(today < d);

  useEffect(() => {
    dispatch({ type: LOAD_USER });
  }, [isAuthenticated]);

  useEffect(() => {
    if (couponError) {
      toast.error(couponError, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (couponSucess) {
      toast.success(couponSucess, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [couponSucess, couponError]);
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

      <div className="max-w-[1400px] mx-auto">
        {!navless_page && (
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
          </>
        )}

        <div
          style={{ display: searchMode ? "none" : "" }}
          className="lg:px-[100px] bg-white text-black px-4 text-body-md text-[14px] md:text-[16px] static"
        >
          {children}
        </div>
        {!navless_page && (
          <>
            <Footer />
            <ContactIcon />
          </>
        )}
      </div>
    </div>
  );
}
