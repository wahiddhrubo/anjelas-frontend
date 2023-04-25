import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

export default function ShortCard({ img, name, price, review, reviewNo }) {
  const decimalStr = (num) => [
    Number(num.toString().split(".")[0]),
    Number(num.toString().split(".")[1]),
    5 - Math.ceil(num),
  ];
  const [intPart, decimalPart, remainingPart] = decimalStr(review);

  return (
    <div className="lg:w-[250px] ">
      <div>
        <Image src={img} width={250} height={250} className="" />
      </div>
      <div>
        {name}
        <br />
        {/* {[...Array(intPart)].map((i, index) => (
          <AiTwotoneStar key={index} className="" />
        ))} */}
        {/* {decimalPart ? <AiTwotoneStar /> : ""} */}
        {/* {remainingPart &&
          [...Array(remainingPart)].map((i, index) => (
            <AiTwotoneStar key={index} className="" />
          ))} */}
        ({reviewNo}){price}
      </div>
    </div>
  );
}
