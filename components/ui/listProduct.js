import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

export default function ListProduct({ img, name, price, review, reviewNo }) {
  const decimalStr = (num) => [Math.round(num), 5 - Math.round(num)];
  const [intPart, remainingPart] = decimalStr(review);

  return (
    <div className="lg:w-[350px] gap-5 flex my-[24px] group/div cursor-pointer text-left ">
      <div className="w-[100px] h-fit my-auto relative  ">
        <div className="absolute text-primary w-full h-full grid place-items-center inset-0 rounded-[5px] transition-all origin-top scale-y-0 group-hover/div:scale-y-100 m-auto z-10 bg-white">
          #
        </div>
        <Image
          loader={() => img}
          src={img}
          width={100}
          height={100}
          className=""
        />
      </div>
      <div>
        <div className="font-semibold mt-3">{name}</div>
        <div className="text-primary">৳ {price}</div>

        <div className="flex  flex-wrap content-center">
          {[...Array(intPart)].map((i, index) => (
            <AiTwotoneStar
              key={index}
              className="text-primary my-auto mx-[2px]"
            />
          ))}
          {remainingPart &&
            [...Array(remainingPart)].map((i, index) => (
              <AiTwotoneStar
                key={index}
                className=" text-transparent stroke-[60px] stroke-primary my-auto mx-[2px] "
              />
            ))}
          ({reviewNo})
        </div>
      </div>
    </div>
  );
}
