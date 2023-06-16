import React from "react";

export default function OrderTitle({ children }) {
  return (
    <div className="w-[80%] mt-8 mb-4 border-gray-100 border-b-[3px]">
      <div className=" font-semibold z-10 text-body-lg relative mb-[-3px] border-black border-b-[3px] pr-4 w-fit ">
        {children}
      </div>
    </div>
  );
}
