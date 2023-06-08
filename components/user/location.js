import React from "react";
import AddLocation from "../checkout/addLocation";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Location from "../checkout/location";
import { motion } from "framer-motion";

export default function Locations({ user, setLocation, location }) {
  console.log(user);
  const anim = {
    initial: { opacity: 0, x: "-5%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div variants={anim} initial="initial" animate="animate">
      <div className="flex flex-wrap lg:justify-start justify-center w-full gap-x-10 my-5 gap-y-5 ">
        <div className="w-full font-semibold text-[32px] mt-5">
          Your Locations
        </div>
        {user.homeLoc && (
          <Location
            type="homeLoc"
            locText={`${user.homeLoc.streetAddress}`}
            location={location}
            setLocation={setLocation}
            id={user.homeLoc._id}
            Icon={AiOutlineHome}
          />
        )}
        {user.workLoc && (
          <Location
            type="workLoc"
            locText={`${user.workLoc.streetAddress}`}
            location={location}
            setLocation={setLocation}
            id={user.workLoc._id}
            Icon={HiOutlineOfficeBuilding}
          />
        )}
        {user.locations?.map((l) => (
          <Location
            type=""
            locText={`${l.streetAddress}`}
            location={location}
            setLocation={setLocation}
            id={l._id}
            Icon={HiOutlineLocationMarker}
          />
        ))}
        <AddLocation />
      </div>
    </motion.div>
  );
}
