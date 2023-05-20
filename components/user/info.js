import React from "react";
import { motion } from "framer-motion";

export default function Account({ user }) {
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
      {" "}
      <table className="text-[14px] lg:text-body-md w-1/2 mt-20">
        <tr>
          <td className="font-semibold p-2 capitalize">Name:</td>
          <td className="font-semibold p-2 capitalize">{user.username}</td>
        </tr>
        <tr>
          <td className="font-semibold p-2 capitalize">Email:</td>
          <td className="font-semibold p-2 ">{user.email}</td>
        </tr>
        {user.phone && (
          <tr>
            <td className="font-semibold p-2 capitalize">Phone:</td>
            <td className="font-semibold p-2 capitalize">{user.phone}</td>
          </tr>
        )}
      </table>
    </motion.div>
  );
}
