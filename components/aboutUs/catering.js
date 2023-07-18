import Image from "next/image";
import React from "react";
import Button from "../ui/buttons";
import { Cookie } from "@next/font/google";
const cookie = Cookie({ weight: "400", style: ["normal"], subsets: ["latin"] });

export default function Catering() {
  return (
    <>
      <div className="text-center mt-16">
        <div className={`${cookie.className} text-heading-lg text-primary`}>
          Customize Your
        </div>
        <div className="text-body-lg tracking-[1em] font-semibold">
          Own Order
        </div>
        <div className="mx-auto w-[10%] bg-primary h-1 my-5"></div>
      </div>
      <div className="lg:h-[500px] px-[16px] mt-10">
        <div className=" lg:absolute left-0 right-0">
          <div className="w-full relative flex flex-wrap items-center lg:h-[480px] ">
            <div className="bg-primary lg:ml-[2%] ml-[-21px] text-white lg:pl-[3%] px-5 lg:pr-[8%] lg:w-[40%] py-5">
              <div className="md:text-heading-md text-body-lg font-semibold mb-2 lg:mb-5">
                Custom Order
              </div>
              <div className="leading-[1.4] text-[14px] md:text-[16px]">
                Experience personalized dining from the comfort of your home. At
                Anjelas Kitchen, we offer custom orders online, allowing you to
                tailor your meal to perfection. Simply visit our website, select
                your preferences, and our skilled chefs will bring your culinary
                visions to life. Indulge in a truly unique and satisfying dining
                experience with our easy and convenient custom order service
                online{" "}
              </div>
              <div className="lg:mt-10 mt-5">
                <Button type={"register"} link={"/custom-order"}>
                  Place Order{" "}
                </Button>
              </div>
            </div>
            <div className="lg:absolute mr-[-32px] ml-[8px] lg:mx-0 top-0 bottom-0 my-auto h-full right-[2%]">
              <Image
                src={"/images/about-catering.jpg"}
                width={800}
                height={600}
                className="xl:w-[820px] lg:w-[640px]  h-full ml-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
