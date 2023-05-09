import React from "react";

export default function Button({ className, children, onClick, type }) {
  return (
    type === "primary" && (
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
    )
  );
}
