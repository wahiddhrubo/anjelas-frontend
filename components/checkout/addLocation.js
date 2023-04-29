import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/buttons";
import { areas } from "../../lib/constants";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
export default function AddLocation({
  setNewLocation,
  setFloor,
  setAppartment,
  setStreetAddress,
  setArea,
  setPhone,
  locType,
  setLocType,
  newLocation,
  locationHandler,
}) {
  const animadtedDiv = {
    initial: {
      y: "-150%",
    },
    animate: {
      y: newLocation ? 0 : "-150%",
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
      setLocType(null);
    } else {
      setLocType(loc);
    }
  };

  const parentDiv = {
    initial: {
      height: "65px",
    },
    animate: {
      height: newLocation ? "560px" : "65px",
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
        className="overflow-y-clip  mt-32 mb-16"
      >
        <motion.div
          variants={btn}
          exit="exit"
          initial="initial"
          animate="animate"
        >
          <Button onClick={() => setNewLocation(!newLocation)} type={"primary"}>
            Add New Location
          </Button>
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
