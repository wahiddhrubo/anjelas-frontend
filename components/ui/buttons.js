import React from "react";

export default function Button({ className, children, onClick, type }) {
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
        <a
          href="#_"
          onClick={() => onClick()}
          class="relative inline-flex items-center px-8 py-[2px] overflow-hidden   text-primary text-[14px] font-semibold border-2 border-primary rounded hover:text-white group hover:bg-gray-50"
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
          <span class="relative">{children}</span>
        </a>
      )}
    </>
  );
}
