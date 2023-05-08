import React from "react";
import SliderComp from "../ui/slider";
import { AiOutlinePieChart } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { IconsDiv } from "../../lib/constants";
import { useState } from "react";
import { addToCartNonUser } from "../../store/slice/cart";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  console.log([featuredImg, ...gallery]);
  const sliderGallery = [featuredImg, ...gallery].map((i) => {
    return { url: i.url };
  });

  const [itemNum, setItemNum] = useState(1);

  const addToCartHandler = () => {
    dispatch(
      addToCartNonUser({
        id,
        item: { name, featuredImage: featuredImg },
        pricePerUnit: sku.price,
        quantity: parseInt(itemNum),
      })
    );
    setItemNum(1);
  };

  return (
    <div className="flex gap-[68px]">
      <SliderComp gallery={sliderGallery} />

      <div className="w-full">
        <div className="font-semibold text-[48px] ">{name}</div>
        <div className="text-primary my-5 font-semibold text-xl  ">
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
        <div className="font-medium my-5 ">{description}</div>
        <div className="flex py-5 font-semibold text-primary border-[1px] border-primary justify-between w-[100%] ">
          <div className="px-10  flex flex-wrap gap-2 content-center">
            <AiOutlinePieChart className="my-auto text-primary text-[25px]" />
            Serving {sku.serving}
          </div>
          <div className="border-x-2 px-10 flex flex-wrap gap-2 content-center border-primary">
            <ImSpoonKnife className="my-auto text-primary text-[25px]" />
            Stock {stock}
          </div>
          <div className="px-10 flex flex-wrap gap-2 content-center">
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
            className=" focus-visible:outline-none border-2 px-4 w-[12%] border-black"
          />
          <div
            onClick={addToCartHandler}
            className="px-[45px] cursor-pointer group/button overflow-hidden relative font-semibold border-2 border-primary  py-[12px] bg-transparent text-primary "
          >
            <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100 top-0 rotate-45 origin-top left-8 bg-primary w-[1.5px]"></div>
            <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100  rotate-45 origin-bottom right-8 bg-primary w-[1.5px]"></div>
            Add To Cart{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
