import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
export default function ContactIcon() {
  return (
    <Link href={"https://wa.me/+8801963322783"} target="_blank">
      <div className=" fixed bottom-20 right-10 flex flex-wrap justify-center content-center bg-[#25D366] rounded-full text-white text-[55px] ">
        <BsWhatsapp />
      </div>
    </Link>
  );
}
