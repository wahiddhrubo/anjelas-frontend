import React from "react";
import Image from "next/image";
export default function AboutHeader() {
  return (
    <div className="h-screen">
      <div className=" top-0 absolute inset-x-0 h-screen text-white text-center  flex justify-center items-center ">
        <div className="w-full h-full absolute inset-0">
          <Image
            width={1400}
            height={720}
            className="h-full object-cover  "
            src={"/images/about-us-header.jpg"}
          />
        </div>
        <div className="absolute z-[5] bg-black opacity-60 inset-0 w-full h-full"></div>
        <div className="relative z-10">
          <div className="text-[35px] mb-4 font-semibold text-white md:tracking-[1em]">
            About Us
          </div>
          <div> Quality That Talks </div>
        </div>{" "}
      </div>
    </div>
  );
}
