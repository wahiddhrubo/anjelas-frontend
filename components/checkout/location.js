import React from "react";

export default function Location({ id, location, setLocation, locText, Icon }) {
  return (
    <div>
      {" "}
      <div
        className={
          "w-[250px] cursor-pointer relative hover:scale-[1.1] hover:bg-primary hover:text-white group transition-all duration-500 shadow-2xl border-2 px-10 py-8 mt-5 font-semibold border-primary "
        }
        style={{
          background: id === location ? "#FE7502" : "#fff",
          color: id === location ? "#fff" : "#000",
        }}
        onClick={() => setLocation(id)}
      >
        <div className=" ">
          Location
          <Icon
            style={{
              color: id === location ? "#fff" : "#FE7502",
            }}
            className="text-primary text-[24px] absolute top-8 group-hover:text-white duration-500 right-10 ml-auto"
          />
        </div>
        <div className="flex">
          <div className="">{locText}</div>
        </div>
      </div>
    </div>
  );
}
