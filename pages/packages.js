import Image from "next/image";
import React from "react";
import Button from "../components/ui/buttons";
import { Cookie } from "@next/font/google";
import Link from "next/link";
const cookie = Cookie({ weight: "400", style: ["normal"], subsets: ["latin"] });

export default function Packages() {
  const packagesOpts = [
    {
      id: 1,
      name: "student",
      price: "TK 60",
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#student",
    },
    {
      id: 2,
      name: "grown up",
      price: "TK 75",
      featured: true,
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#grown-up",
    },
    {
      id: 3,
      name: "exclusive",
      price: "TK 120",
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#exclusive",
    },
  ];
  return (
    <div className="">
      <div className="md:relative  lg:h-[750px] md:h-[50vh] h-[30vh]">
        <div className="absolute md:w-fit md:top-[-100px] top-0 lg:h-screen lg:inset-x-[-100px] md:inset-x-[-15px] inset-x-0 w-screen">
          <div
            style={{ backgroundImage: 'url("/images/packages-bg.svg")' }}
            className="relative flex w-screen max-w-[1400px] bg-cover bg-bottom  text-center justify-center items-center md:h-[50vh] lg:h-[750px] h-[25vh]  bg-no-repeat"
          >
            <div className="text-[24px] text-black md:text-[64px]  font-semibold ">
              Packages
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:mt-16 mb-10">
        <div className={`${cookie.className} text-heading-lg text-primary`}>
          Choose Your
        </div>
        <div className="text-body-lg tracking-[1em] font-semibold">
          Own Package
        </div>
        <div className="mx-auto w-[10%] bg-primary h-1 my-5"></div>
      </div>
      <div>
        <div className="flex w-3/4 gap-y-8 justify-center  mx-auto md:justify-between flex-wrap ">
          {packagesOpts.map((p) => (
            <div
              key={p.id}
              className="shadow-2xl rounded-2xl text-center px-8 py-5 bg-white "
              style={{
                backgroundColor: p.featured ? "#FE7502" : "",
                color: p.featured ? "white" : "",
              }}
            >
              <div className="capitalize text-body-lg font-semibold mb-2">
                {p.name}
              </div>
              <div className="font-semibold">{p.price}/Per Meal</div>
              <div className="text-left my-8">
                {p.fea.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </div>

              <Button
                link={{
                  pathname: "/package-details",
                  query: p,
                }}
                type={p.featured ? "register" : "register-light"}
              >
                Order Now
              </Button>
              {/* <div
                className="font-semibold w-fit mx-auto hover:text-black cursor-pointer"
                style={{ color: p.featured ? "white" : "#FE7502" }}
              >
                See Menu
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
