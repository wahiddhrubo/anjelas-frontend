import React, { useState } from "react";
import NumberSlider from "../ui/numslider";
import { BsSearch } from "react-icons/bs";
import ListProduct from "../ui/listProduct";
import Link from "next/link";
import { categories } from "../../lib/constants";

export default function Filter({ setQueryFilter, featuredProducts }) {
  const [minPrice, setMinprice] = useState(0);
  const [maxPrice, setMaxprice] = useState(4500);
  const [srch, setSrch] = useState();
  const [showAllCategories, setShowAllCategories] = useState(false);
  const categoriesNo = !showAllCategories ? -8 : 0;
  return (
    <div className="w-[25%] mt-[7.5%]">
      <div>
        <div className="flex px-[24px] py-[15px] border-[2px] border-primary ">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSrch(e.target.value)}
            className="placeholder:font-semibold placeholder:text-black  text-primary outline-none focus-visible:outline-none "
          />
          <BsSearch
            onClick={() => setQueryFilter("keyword", srch)}
            className="text-primary my-auto cursor-pointer ml-auto"
          />
        </div>
        <div className="text-[24px] font-semibold text-primary my-4">Price</div>
        <NumberSlider
          min={0}
          max={4500}
          minValue={minPrice}
          setMinValue={setMinprice}
          maxValue={maxPrice}
          setMaxValue={setMaxprice}
        />
        <div
          onClick={() => {
            setQueryFilter("price", `${minPrice}-${maxPrice}`);
          }}
          className="px-[45px] w-fit my-10 cursor-pointer group/button overflow-hidden relative font-semibold border-2 border-primary  py-[12px] bg-transparent text-primary "
        >
          <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100 top-0 rotate-45 origin-top left-8 bg-primary w-[1.5px]"></div>
          <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100  rotate-45 origin-bottom right-8 bg-primary w-[1.5px]"></div>
          Filter
        </div>
        <div className=" w-fit ml-auto font-semibold">
          ৳ {Math.round(minPrice)} - ৳ {Math.round(maxPrice)}
        </div>
        <div className="text-[24px] font-semibold text-primary my-4">
          Latest
        </div>

        {featuredProducts?.map((fea) => (
          <ListProduct
            key={fea._id}
            name={fea.name}
            id={fea._id}
            review={fea.review}
            price={fea.price}
            img={fea.featuredImage.url}
          />
        ))}
        <div className="text-[24px] font-semibold text-primary mt-10 mb-4">
          Categories
        </div>
        {categories.slice(categoriesNo).map((c, index) => (
          <div
            onClick={() => setQueryFilter("categories", c)}
            className=" cursor-pointer relative group  w-fit text-black font-semibold my-2  "
          >
            {c}
            <hr className="w-full group-hover:scale-x-100 scale-x-0 transition-all origin-left duration-300 h-[2px] mb-[4px] bg-primary " />
            <hr className="w-full  group-hover:scale-x-100 scale-x-0 transition-all origin-left duration-500 h-[2px]  bg-primary " />
          </div>
        ))}
        <div
          className="text-primary cursor-pointer font-semibold "
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          {showAllCategories ? "Show Less" : "Show More"}
        </div>
      </div>{" "}
    </div>
  );
}
