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
    <div className="h-[500px] mt-[100px] relative w-full">
      <Image
        src={"/images/footer-bg.png"}
        width={400}
        height={400}
        className="absolute bottom-0 right-0"
      />
      <div className="px-[100px] w-[75%]">
        <div className="mt-10 mb-4">
          <Image src={"/images/logo.svg"} width={200} height={80} />
        </div>
        <div className="text-[20px] my-5 w-[665px]">
          Experience the comforting flavors of homecooked meals prepared with
          love and care. Our kitchen specializes in traditional recipes handed
          down through generations, bringing you the authentic taste of home in
          every bite.
        </div>
        <div className="flex gap-16 my-5">
          {linksList.map((lst) => (
            <div key={lst.title}>
              <div className=" text-[22px] my-2 font-semibold ">
                {lst.title}
              </div>
              {lst.links.map((l) => (
                <Link
                  className="text-[18px] hover:text-primary  block my-1"
                  key={l.link}
                  href={l.link}
                >
                  {l.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-3 my-8">
          {socials.map((s) => (
            <Link
              key={s.link}
              href={s.link}
              className={`block  bg-grey-300 hover:bg-primary hover:text-white text-[25px] p-3  w-fit text-black rounded-full`}
            >
              {s.icon}
            </Link>
          ))}
        </div>
        <div>
          © {new Date().getFullYear()} Anjelas Kitchen. All rights reserved.
        </div>
      </div>
    </div>
  );
}
