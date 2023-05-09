import React from "react";
import SliderComp from "../ui/slider";
import { AiOutlinePieChart } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { IconsDiv } from "../../lib/constants";
import { useState } from "react";
import { addToCartNonUser } from "../../store/slice/cart";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Button from "../ui/buttons";
import { ADD_TO_CART } from "../../store/saga/actions";

export default function Hero({
  gallery = [],
  featuredImg,
  name,
  id,
  description,
  serving,
  price,
  stock,
  category,
  skus,
  setSku,
  sku,
}) {
  const [showMore, setShowMore] = useState();
  const slicer = showMore ? -1 : 50;
  const dispatch = useDispatch();
  console.log([featuredImg, ...gallery]);
  const sliderGallery = [featuredImg, ...gallery].map((i) => {
    return { url: i.url };
  });
  console.log(sliderGallery.length);

  const [itemNum, setItemNum] = useState(1);
  console.log(description.split(" ").length);
  const addToCartHandler = () => {
    dispatch({
      type: ADD_TO_CART,
      id,
      item: { name, featuredImage: featuredImg },
      pricePerUnit: sku.price,
      variant: sku.name,
      quantity: parseInt(itemNum),
    });
    setItemNum(1);
  };

  return (
    <div className="flex flex-wrap gap-[68px]">
      {sliderGallery.length > 1 && <SliderComp gallery={sliderGallery} />}
      {sliderGallery.length === 1 && (
        <div className="lg:w-[45%] my-auto h-full grid place-items-center ">
          {" "}
          <Image
            loader={() => featuredImg.url}
            src={featuredImg.url}
            width={600}
            height={600}
            className="w-[450px] h-[450px] object-cover"
          />{" "}
        </div>
      )}
      <div className="lg:w-[45%]">
        <div className="font-semibold lg:text-[48px] text-[28px] ">{name}</div>
        <div className="text-primary lg:my-5 my-2 font-semibold text-xl  ">
          ৳ {sku.price}
        </div>
        <div className="flex gap-10">
          <div className="my-2 flex flex-wrap gap-5">
            {skus.map((s) => (
              <div
                className="w-[145px] transition-all duration-300 cursor-pointer hover:scale-110 rounded-md border-2 border-primary p-2 text-center text-[16px] font-semibold "
                key={s}
                onClick={() => setSku(s)}
                style={{
                  background: s.sku === sku.sku ? "#FE7502" : "#fff",
                  color: s.sku === sku.sku ? "#fff" : "#000",
                }}
              >
                {s.name}
              </div>
            ))}
          </div>
        </div>
        <div className="font-medium leading-6 lg:leading-8 text-[14px] lg:text-[16px] my-5 ">
          {description.split(" ").slice(0, slicer).join(" ")}{" "}
          {description.split(" ").length >= 50 && (
            <span
              className="text-primary font-semibold cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "...Show More"}{" "}
            </span>
          )}{" "}
        </div>
        <div className="flex py-5 font-semibold text-primary border-[1px] border-primary justify-between w-[100%] ">
          <div className="lg:px-10 px-2 text-[10px] lg:text-[16px]  flex flex-wrap gap-2 content-center">
            <AiOutlinePieChart className="my-auto text-primary text-[25px]" />
            Serving {sku.serving}
          </div>
          <div className="border-x-2 lg:px-10 px-2 text-[10px] lg:text-[16px] flex flex-wrap gap-2 content-center border-primary">
            <ImSpoonKnife className="my-auto text-primary text-[25px]" />
            Stock {stock}
          </div>
          <div className="lg:px-10 px-2 text-[10px] lg:text-[16px] flex flex-wrap gap-2 content-center">
            <IconsDiv
              className="my-auto text-primary text-[25px]"
              type={category[0]}
            />
            {category[0]}
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <input
            type="number"
            onChange={(e) => setItemNum(e.target.value)}
            value={itemNum}
            min={1}
            className=" focus-visible:outline-none border-2 px-4 lg:w-[12%] w-[25%]  border-black"
          />

          <Button
            type={"primary"}
            className="w-full text-center"
            onClick={addToCartHandler}
          >
            Add To Cart{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
