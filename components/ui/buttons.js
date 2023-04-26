import React from "react";

export default function Button({ className, children, onClick, type }) {
  return (
    type === "primary" && (
      <div
        onClick={onClick}
        className={
          "px-[45px] w-fit cursor-pointer group/button overflow-hidden relative font-semibold border-2 border-primary  py-[12px] bg-transparent text-primary " +
          className
        }
      >
        <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100 top-0 rotate-45 origin-top left-8 bg-primary w-[1.5px]"></div>
        <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100  rotate-45 origin-bottom right-8 bg-primary w-[1.5px]"></div>
        {children}
      </div>
    )
  );
}
