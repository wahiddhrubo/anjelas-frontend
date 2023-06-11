import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
export default function Footer() {
  const socials = [
    {
      link: "wa.me/+8801963322783",
      icon: <BsWhatsapp />,
      color: "#25D366",
    },
    {
      link: "facebook.com",
      icon: <FaFacebookMessenger />,
      color: "#3b5998",
    },
    {
      link: "instragram.com",
      icon: <BsInstagram />,
      color: "#d62976",
    },
  ];
  const linksList = [
    {
      title: "Support",
      links: [
        {
          name: "Contact us",
          link: "/contact",
        },
        {
          name: "FAQ",
          link: "/faq",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          name: "Privacy Policy",
          link: "/privacy",
        },
        {
          name: "Terms & Conditions",
          link: "/terms",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Packages",
          link: "/packages",
        },
        {
          name: "Events",
          link: "/events",
        },
      ],
    },
  ];
  return (
    <div className="lg:h-[500px] pb-2 mt-[100px] relative w-full">
      <Image
        src={"/images/footer-bg.png"}
        width={400}
        height={400}
        className="absolute lg:min-w-[400px] min-w-[385px] bottom-0 right-0"
      />
      <div className="lg:px-[100px] w-[90%] px-[24px] lg:w-[75%]">
        <div className="mt-10 mb-4">
          <Image src={"/images/logo.svg"} width={200} height={80} />
        </div>
        <div className="lg:text-[20px] relative z-20 text-[14px] my-5 lg:w-[665px]">
          Experience the comforting flavors of homecooked meals prepared with
          love and care. Our kitchen specializes in traditional recipes handed
          down through generations, bringing you the authentic taste of home in
          every bite.
        </div>
        <div className="flex  flex-wrap relative z-20 lg:gap-16 gap-5 my-5">
          {linksList.map((lst) => (
            <div key={lst.title}>
              <div className=" lg:text-[22px] text-[18px] my-2 font-semibold ">
                {lst.title}
              </div>
              {lst.links.map((l) => (
                <Link
                  className="lg:text-[18px] text-[12px] hover:text-primary  block my-1"
                  key={l.link}
                  href={l.link}
                >
                  {l.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex relative z-20 gap-3 lg:my-8 my-2">
          {socials.map((s) => (
            <Link
              key={s.link}
              href={s.link}
              className={`block  lg:bg-gray-300  hover:bg-primary hover:text-white text-[25px] p-3  w-fit text-black rounded-full`}
            >
              {s.icon}
            </Link>
          ))}
        </div>
        <div className="relative z-20 text-[10px] lg:text-[16px] ">
          © {new Date().getFullYear()} Anjelas Kitchen. All rights reserved.
        </div>
      </div>
    </div>
  );
}
