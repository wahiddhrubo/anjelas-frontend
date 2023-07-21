import Image from "next/image";
import React from "react";
import Button from "../components/ui/buttons";
import Link from "next/link";

export default function ContactUs() {
  const menu = [
    { text: "Packages", link: "/packages" },
    { text: "Offers", link: "/offers" },
    { text: "Shop", link: "/shop" },
    { text: "Catering", link: "/catering" },
    { text: "About Us", link: "/about-us" },
  ];
  return (
    <div className="absolute  inset-x-0 h-screen bg-cover  ">
      <div className="w-full h-full overflow-y-clip bg-white grid grid-cols-2 ">
        <div>
          <Image
            src="/images/contact-us.jpg"
            width={1080}
            height={720}
            className="w-full  h-full object-cover"
          />
        </div>
        <div>
          <div className="w-full p-10">
            <div className="flex  font-semibold text-body-md w-full gap-3 justify-center">
              {menu.map((m) => (
                <Link
                  href={m.link}
                  className="hover:text-primary mb-5"
                  key={m.text}
                >
                  {m.text}
                </Link>
              ))}
            </div>
            <input
              type="text"
              className="w-full p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
              placeholder="Name"
            />
            <div className="flex justify-between flex-wrap">
              <input
                type="text"
                className="w-[45%]  p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-[45%]  p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
                placeholder="Subject"
              />
            </div>
            <textarea
              rows={6}
              type="text"
              className="w-full p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
              placeholder="Message"
            />
            <div className="w-fit h-fit ml-auto">
              <Button type="register-light">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
