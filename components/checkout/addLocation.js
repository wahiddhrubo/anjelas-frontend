import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/buttons";
import { ADD_LOCATION } from "../../store/saga/actions";
import { areas } from "../../lib/constants";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useDispatch } from "react-redux";
export default function AddLocation({}) {
  const dispatch = useDispatch();
  const [newLocation, setNewLocation] = useState(false);
  const [floorNo, setFloor] = useState();
  const [apartmentNo, setAppartment] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [area, setArea] = useState();
  const [phone, setPhone] = useState();
  const [locType, setLocType] = useState("");
  const locationHandler = () => {
    dispatch({
      type: ADD_LOCATION,
      floorNo,
      apartmentNo,
      streetAddress,
      area,
      phone,
      locType,
    });
  };

  const animadtedDiv = {
    initial: {
      y: "-170%",
    },
    animate: {
      y: newLocation ? 0 : "-170%",
      originY: "0",
      transition: {
        ease: "easeInOut",
        origin: "top center",
        duration: 0.8,
      },
    },
  };
  const changeLocType = (loc) => {
    if (locType === loc) {
      setLocType("");
    } else {
      setLocType(loc);
    }
  };

  const parentDiv = {
    initial: {
      height: "200px",
    },
    animate: {
      height: newLocation ? "560px" : "200px",
      originY: "0",
      transition: {
        ease: "easeInOut",
        origin: "top center",
        duration: 0.8,
      },
    },
  };
  const btn = {
    initial: {
      opacity: "0",
    },
    animate: {
      opacity: newLocation ? 0 : 1,
      originY: "0",
      transition: {
        ease: "easeInOut",
        origin: "top center",
        duration: 0.8,
      },
      transitionEnd: {
        display: newLocation ? "none" : "block",
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={parentDiv}
        initial="initial"
        animate="animate"
        className="overflow-y-clip  mt-16 mb-16"
      >
        <motion.div
          variants={btn}
          exit="exit"
          initial="initial"
          animate="animate"
        >
          <div
            className="w-[200px] cursor-pointer h-[200px] border-dashed border-primary border-2 text-primary font-semibold grid place-items-center"
            onClick={() => setNewLocation(!newLocation)}
          >
            Add New Location
          </div>
        </motion.div>
        <motion.div
          variants={animadtedDiv}
          initial="initial"
          animate="animate"
          className="w-[50%]   "
        >
          <div className="font-semibold capitalize text-[28px] ">
            Add new Location
          </div>
          <div>
            <input
              type="text"
              className="w-[45%] mr-[5%] my-5 placeholder:font-semibold placehoder:opacity-100 placehoder-black focus-visible:outline-none border-b-2 border-primary px-2 py-2"
              placeholder="Floor No."
              onChange={(e) => setFloor(e.target.value)}
            />
            <input
              type="text"
              className="w-[45%] mr-[5%] my-5 placeholder:font-semibold placehoder:opacity-100 placehoder-black focus-visible:outline-none border-b-2 border-primary px-2 py-2"
              placeholder="Appartment No"
              onChange={(e) => setAppartment(e.target.value)}
            />
            <input
              type="text"
              className="w-[45%] mr-[5%] my-5 placeholder:font-semibold placehoder:opacity-100 placehoder-black focus-visible:outline-none border-b-2 border-primary px-2 py-2"
              placeholder="Street Address"
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <select
              name=""
              id=""
              className="w-[45%] font-semibold leading-[2] mr-[5%] my-5 placeholder:font-semibold placehoder:opacity-100 placehoder-black focus-visible:outline-none border-b-2 border-primary px-2 py-2"
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="" disabled selected>
                Select Area...
              </option>
              {areas.map((a) => (
                <option className="font-semibold  py-2" key={a}>
                  {a}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-[45%] mr-[5%] my-5 placeholder:font-semibold placehoder:opacity-100 placehoder-black focus-visible:outline-none border-b-2 border-primary px-2 py-2"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex my-5 gap-5">
              <div
                style={{
                  background: locType === "home" ? "#FE7502" : "#fff",
                  color: locType === "home" ? "#fff" : "#FE7502",
                }}
                onClick={() => changeLocType("home")}
                className="w-[80px] h-[80px] border-2 hover:scale-[1.1] transition-all duration-300 cursor-pointer border-primary flex flex-wrap content-center justify-center p-6 shadow-2xl"
              >
                <AiOutlineHome className="text-[50px] " />
              </div>
              <div
                style={{
                  background: locType === "work" ? "#FE7502" : "#fff",
                  color: locType === "work" ? "#fff" : "#FE7502",
                }}
                onClick={() => changeLocType("work")}
                className="w-[80px] h-[80px] border-2 hover:scale-[1.1] transition-all duration-300 cursor-pointer border-primary flex flex-wrap content-center justify-center p-6 shadow-2xl"
              >
                <HiOutlineOfficeBuilding className="text-[40px] " />
              </div>
            </div>
            <div className="flex  mt-12 flex-wrap">
              <div className="w-fit  mr-auto">
                <Button onClick={() => setNewLocation(false)} type={"primary"}>
                  Cancel
                </Button>
              </div>
              <div className="w-fit mr-[5%] ml-auto">
                <Button type={"primary"} onClick={locationHandler}>
                  Add Location
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
