import Image from "next/image";
import React from "react";
import { Inter, Cookie, Montserrat } from "@next/font/google";
import Link from "next/link";
const cookie = Cookie({ weight: "400", style: ["normal"], subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Team() {
  const socialHandler = [
    {
      name: "facebook",
      link: "/",
    },
    {
      name: "linkedin",
      link: "/",
    },
    {
      name: "twitter",
      link: "/",
    },
    {
      name: "instragram",
      link: "/",
    },
  ];
  return (
    <div className="lg:h-[1180px] mt-28">
      <div className=" lg:absolute left-0 right-0">
        <div className="text-center">
          <div className={`${cookie.className} text-heading-lg text-primary`}>
            Member Of
          </div>
          <div className="text-body-lg tracking-[1em] font-semibold">
            Our Team
          </div>
          <div className="mx-auto w-[10%] bg-primary h-1 my-5"></div>
        </div>
        <div className="w-full relative flex flex-col-reverse flex-wrap  ">
          <div className="bg-primary lg:ml-20 ml-[-16px] px-5 text-white lg:pl-[5%] lg:pr-[22%] lg:w-[60%] w-full pt-[15%] pb-[10%]">
            <div className="lg:text-heading-lg text-body-lg font-semibold  mb-5">
              Head Chef
            </div>
            <div className="leading-[1.65] lg:text-[16px] text-[14px] ">
              Meet our esteemed Head Chef, Anjela Alam, a passionate home cook
              with over 22 years of experience in the culinary arts. With a deep
              love for cooking and an innate talent for creating flavors that
              tantalize the taste buds, Chef Anjela brings a wealth of expertise
              and creativity to our homemade restaurant. With more than 3 years
              of experience in serving food online, Chef Anjela understands the
              nuances of delivering exceptional homemade meals to food lovers.
              <br />
              <br />
              Her dedication to quality, attention to detail, and commitment to
              customer satisfaction make her an invaluable asset to our culinary
              team. Chef Anjela&apos;s culinary journey began at an early age,
              honing her skills through years of experimentation, self-learning,
              and a passion for discovering new flavors.
            </div>
            <div className="grid grid-cols-2 mt-5 gap-x-10 w-[60%] ">
              {socialHandler.map((s, index) => (
                <div key={index} className="capitalize  leading-8">
                  <Link href={s.link}>{s.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:absolute  top-[2%] bottom-5 mr-[-16px] ml-[24px] lg:ml-[0] lg:mr-0 right-[5%]">
            <Image
              src={"/images/about-1.jpg"}
              width={620}
              height={1800}
              className="lg:w-[58%] xl:w-[75%] lg:h-[800px] h-[420px] ml-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
