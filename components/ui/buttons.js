import Link from "next/link";
import React from "react";

export default function Button({ className, children, onClick, type, link }) {
  return (
    <>
      {type === "primary" && (
        <div
          onClick={onClick}
          className={
            "lg:px-[45px] text-[12px] lg:text-[16px] px-3 py-1 w-fit cursor-pointer group/button overflow-hidden relative font-semibold border-2 border-primary  lg:py-[12px] bg-transparent text-primary " +
            className
          }
        >
          <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100 top-0 rotate-45 origin-top lg:left-8 left-4 bg-primary w-[1.5px]"></div>
          <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100  rotate-45 origin-bottom lg:right-8 right-4 bg-primary w-[1.5px]"></div>
          {children}
        </div>
      )}
      {type === "review" && (
        <Link
          href={link ? link : "#_"}
          onClick={() => onClick()}
          class="relative inline-flex items-center px-8 py-[2px] overflow-hidden   text-primary text-[14px] font-semibold border-2 border-primary rounded hover:text-white group hover:bg-gray-50"
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
          <span class="relative">{children}</span>
        </Link>
      )}
      {type === "register" && (
        <Link
          href={link ? link : "#_"}
          onClick={() => onClick()}
          class="relative  items-center justify-start inline-block px-8 py-3 overflow-hidden font-bold  group"
        >
          <span class="w-36 h-36 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-6"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
            {children}
          </span>
          <span class="absolute inset-0 border-4 border-white "></span>
        </Link>
      )}
      {type === "register-light" && (
        <Link
          href={link ? link : "#_"}
          onClick={() => onClick()}
          class="relative  items-center justify-start inline-block px-8 py-3 overflow-hidden font-bold  group"
        >
          <span class="w-36 h-36 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-6"></span>
          <span class="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-white">
            {children}
          </span>
          <span class="absolute inset-0 border-4 border-primary "></span>
        </Link>
      )}
    </>
  );
}
