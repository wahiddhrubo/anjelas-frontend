import Image from "next/image";
import React from "react";
import { AiOutlineHourglass } from "react-icons/ai";
import { BsPin } from "react-icons/bs";
import { TbMedal } from "react-icons/tb";
import { Cookie, Montserrat } from "@next/font/google";

const cookie = Cookie({ weight: "400", style: ["normal"], subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Discover() {
  const fea = [
    {
      icon: <TbMedal className="text-[55px] mx-auto text-primary" />,
      title: "A Winner In Quality",
      description:
        "Experience culinary excellence at Anjelas Kitchen. Exceptional ingredients. Expertly crafted dishes. Impeccable service. Award-winning. Discover the epitome of quality. ",
    },
    {
      icon: <AiOutlineHourglass className="text-[55px] mx-auto text-primary" />,
      title: "On TIme Delivery",
      description:
        "Timely and reliable, we guarantee prompt delivery of your delicious meals. Enjoy your food fresh and hot, delivered right to your doorstep. ",
    },
    {
      icon: <BsPin className="text-[55px] mx-auto text-primary" />,
      title: "Local Fresh Ingredients",
      description:
        " Anjelas Kitchen—where freshness meets flavor. Taste the difference with every bite. Order us and savor the best of bounty.",
    },
  ];
  const images = [
    {
      src: "/images/about-1.jpg",
      link: "",
    },
    {
      src: "/images/about-2.jpg",
      link: "",
    },
    {
      src: "/images/about-3.jpg",
      link: "",
    },
  ];
  return (
    <div className="w-[90%] mx-auto ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto my-16">
        {fea.map((f, index) => (
          <div key={index} className="text-center">
            <div className="w-28 h-28 mx-auto rounded-full grid place-items-center border-2 border-primary">
              {f.icon}
            </div>
            <div className={` text-black text-body-lg font-semibold my-6 `}>
              {f.title}
            </div>
            <div
              className={`${montserrat.className} md:text-[16px] text-[14px]`}
            >
              {f.description}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className={`${cookie.className} text-heading-lg text-primary`}>
          Discover
        </div>
        <div className="text-body-lg tracking-[1em] font-semibold">
          Our Story
        </div>
        <div className="mx-auto w-[10%] bg-primary h-1 my-5"></div>
      </div>
      <div className="relative my-16">
        <div className="relative z-10 flex flex-wrap md:flex-nowrap gap-5 w-[85%]">
          {images.map((i, index) => (
            <div key={index}>
              <Image
                width={280}
                height={400}
                src={i.src}
                className="object-cover w-[280px] md:h-[420px] h-[250px] "
              />
            </div>
          ))}
        </div>

        <div className="mt-10 w-[65%]">
          <div className="md:text-[35px] text-body-lg font-semibold my-5">
            Our Primary Vission
          </div>
          <div
            className={` md:text-[16px] leading-[1.7] text-[14px]  ${montserrat.className}`}
          >
            We are committed to using the finest ingredients, supporting local
            suppliers, and showcasing culinary innovation. With a dedicated team
            passionate about delivering excellence, we strive to create
            memorable moments that exceed our guests&apos; expectations.
            <br />
            <br />
            Our mission is to become a cherished part of our community, where
            food lovers gather to celebrate the art of dining.
          </div>
        </div>
        <div className="absolute top-10 right-0 bg-primary w-[25%] h-full"></div>
      </div>
    </div>
  );
}
