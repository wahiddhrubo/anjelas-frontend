import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_LOCATION } from "../../store/saga/actions";
import { BiTrashAlt } from "react-icons/bi";
export default function Location({
  id,
  location,
  setLocation,
  locText,
  Icon,
  type,
}) {
  const dispatch = useDispatch();
  const delLoc = () => {
    console.log({ type: DELETE_LOCATION, id, type });
    dispatch({ type: DELETE_LOCATION, id, locType: type });
  };
  return (
    <div>
      <div
        className={
          "w-[210px] cursor-pointer relative hover:scale-[1.1] hover:bg-primary hover:text-white group transition-all duration-500 shadow-2xl border-2 px-10 py-8 mt-5 font-semibold border-primary "
        }
        style={{
          background: id === location ? "#FE7502" : "#fff",
          color: id === location ? "#fff" : "#000",
        }}
        onClick={() => setLocation(id)}
      >
        <div className="top-2 right-2 absolute w-fit h-fit" onClick={delLoc}>
          <BiTrashAlt className=" hover:text-primary  text-red-800" />
        </div>
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
          <div className="">{locText.slice(0, 20)}</div>
        </div>
      </div>
    </div>
  );
}
