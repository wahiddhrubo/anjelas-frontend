import React from "react";
import { useState } from "react";
import { MdOutlineSort } from "react-icons/md";

export default function Sort({ setQueryFilter, setDescending }) {
  const [current, setCurrent] = useState();
  const sortHandler = (opt) => {
    if (opt === current) {
      setDescending((prev) => !prev);
      setCurrent(opt);
      setQueryFilter("sortBy", opt.sortBy);
    } else {
      setDescending(false);
      setCurrent(opt);
      setQueryFilter("sortBy", opt.sortBy);
    }
  };

  const opts = [
    {
      sortBy: "createdAt",
      name: " Latest",
    },
    {
      sortBy: "skus.price",
      name: " Price",
    },
    {
      sortBy: "reviews.rating",
      name: " Rating",
    },
    {
      sortBy: "reviews.rating",
      name: " Most Reviewed",
    },
  ].filter((o) => o.name !== current?.name);

  return (
    <div className=" group  w-fit relative h-fit text-[10px] md:text-[16px] ml-auto ">
      <div className="flex lg:w-[215px] w-[125px]  gap-3 md:px-4 px-2 md:py-2 py-1 border-2 border-black  rounded-md">
        <MdOutlineSort className="text-[25px] my-auto" />{" "}
        {current ? current.name : "Sort By"}
      </div>
      <div className="p-2 group-hover:scale-y-100 scale-y-0 transition-all duration-300 origin-top border-2 w-full bg-white absolute border-black mt-[-1px] z-10 ">
        {current && (
          <div
            className="md:my-2  text-primary cursor-pointer "
            onClick={() => sortHandler(current)}
          >
            {current.name}
          </div>
        )}
        {opts.map((o) => (
          <div
            key={o.name}
            className="md:my-2  hover:text-primary cursor-pointer "
            onClick={() => sortHandler(o)}
          >
            {o.name}
          </div>
        ))}
      </div>
    </div>
  );
}
