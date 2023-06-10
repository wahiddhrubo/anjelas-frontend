import Head from "next/head";
import Header from "../components/home/header.js";
import About from "../components/home/about.js";
import Menu from "../components/home/menu.js";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/selectors.js";
import { useEffect } from "react";
import { LATEST_PRODUCT } from "../store/saga/actions.js";

export default function Home() {
  const { latestItems } = useSelector(getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LATEST_PRODUCT });
  }, []);
  console.log(latestItems);
  return (
    <div className=" ">
      <Head>
        <title>Anjela&apos;s Kitchen</title>
        <meta name="description" content="Home Food Delivery Store" />
      </Head>
      <Header />
      <About />
      <Menu items={latestItems} />
    </div>
  );
}
