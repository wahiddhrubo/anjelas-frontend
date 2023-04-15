import Head from "next/head";
import Image from "next/image";
import Header from "../components/home/header.js";
import About from "../components/home/about.js";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Anjela's Kitchen</title>
        <meta name="description" content="Home Food Delivery Store" />
      </Head>
      <Header />
      <About />
    </div>
  );
}
