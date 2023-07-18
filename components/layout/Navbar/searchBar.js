import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SEARCHED_PRODUCT } from "../../../store/saga/actions";

export default function SearchBar({ searchMode, setSearchMode }) {
  const searchRef = useRef();
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SEARCHED_PRODUCT, keyword });
  }, [keyword]);

  const searchHandler = () => {
    setSearchMode(!searchMode);
    searchRef.current.focus();
  };

  const searchAnim = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: searchMode ? 1 : 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className=" md:hidden ml-4  cursor-pointer flex justify-end items-center  h-full">
        <AiOutlineSearch
          onClick={searchHandler}
          className="w-[25px] h-[25px]"
        />
        <motion.div
          variants={searchAnim}
          animate="animate"
          initial="initial"
          className="absolute mt-5 justify-between flex inset-x-[5%] h-full p-4 bg-gray-200 rounded-md w-[90%] "
        >
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            ref={searchRef}
            className="w-[80%] bg-transparent focus-visible:outline-none"
          />
          <AiOutlineClose onClick={() => setSearchMode(false)} />
        </motion.div>
      </div>
      <div className=" md:flex hidden ml-4  cursor-pointer  justify-end items-center  h-full">
        <AiOutlineSearch
          onClick={searchHandler}
          className="w-[25px] h-[25px] my-auto"
        />
        <motion.div
          variants={searchAnim}
          animate="animate"
          initial="initial"
          className="absolute inset-y-0 my-auto origin-right justify-between flex  h-full p-4 bg-gray-200 rounded-md  w-[50%]"
        >
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            ref={searchRef}
            className="w-[80%] bg-transparent focus-visible:outline-none"
          />
          <AiOutlineClose onClick={() => setSearchMode(false)} />
        </motion.div>
      </div>
    </>
  );
}
