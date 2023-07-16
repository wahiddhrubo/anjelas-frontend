import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "../../ui/cart.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { motion } from "framer-motion";
import { categories } from "../../../lib/constants.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";
import SearchBar from "./searchBar.js";

export default function MobileNav({ menu, setSearchMode, searchMode }) {
  const [sidebar, setSidebar] = useState(false);
  const { items, quantity } = useSelector((state) => state.cart);
  const sidebarAnim = {
    initial: {
      x: "-105%",
    },
    animate: {
      x: sidebar ? 0 : "-105%",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <div className=" relative md:hidden">
        <div className=" px-10 ">
          <div className=" flex shadow-sm fixed inset-0  bg-white z-50 px-5 h-[50px]">
            <div className="w-fit mr-auto">
              <Link className="grid place-items-center h-full" href={"/"}>
                <Image
                  src="/images/logo.svg"
                  className="w-[85px] my-auto"
                  width={150}
                  height={80}
                />
              </Link>
            </div>
            <Link className="grid place-items-center h-full" href={"/cart"}>
              <div className="relative group">
                <Cart cart={items} />
                <MdShoppingCart className="w-[25px] h-[25px] " />
                <div className="w-4 h-4 group-hover:scale-0 transition-all duration-300 text-[8px] bottom-[-4px] right-[-4px] rounded-full font-light grid place-items-center absolute bg-primary text-white ">
                  {quantity ? quantity : 0}
                </div>
              </div>
            </Link>
            <SearchBar searchMode={searchMode} setSearchMode={setSearchMode} />

            <div
              onClick={() => setSidebar(!sidebar)}
              className="ml-4 cursor-pointer grid place-items-center h-full"
            >
              <RxHamburgerMenu className="w-[25px] h-[25px] " />
            </div>
          </div>
        </div>
        <motion.div
          variants={sidebarAnim}
          animate="animate"
          initial="initial"
          className="fixed mt-[50px] px-2 py-8 shadow-lg bg-white w-[145px] z-50 inset-0 h-screen overflow-auto "
        >
          {menu.map((m) => (
            <Link
              href={m.link}
              key={m.link}
              className="block my-2 hover:text-primary text-[14px] font-semibold "
            >
              {m.text}
            </Link>
          ))}
          <hr className="bg-primary w-3/4 h-0 border-t-2 mt-2 mb-5 border-primary" />
          <div className="font-semibold mb-4 ">Categories</div>
          {categories.map((c, index) => (
            <div
              key={c}
              className=" text-[12px] cursor-pointer relative group  w-fit text-black font-semibold my-2  "
            >
              {c}
              <hr className="w-full group-hover:scale-x-100 scale-x-0 transition-all origin-left duration-300 h-[2px] mb-[4px] bg-primary " />
              <hr className="w-full  group-hover:scale-x-100 scale-x-0 transition-all origin-left duration-500 h-[2px]  bg-primary " />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
