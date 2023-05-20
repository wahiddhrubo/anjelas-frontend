import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/buttons";
export default function RequestForm() {
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
    <motion.div
      className="w-full"
      variants={anim}
      initial="initial"
      animate="animate"
    >
      <input
        type="text"
        className="w-full p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
        placeholder="Dish Name"
      />
      <div className="flex justify-between flex-wrap">
        <input
          type="text"
          className="w-[45%]  p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-[45%]  p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
          placeholder="Type Of Dish"
        />
      </div>
      <textarea
        rows={6}
        type="text"
        className="w-full p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
        placeholder="Describe Your Dish"
      />
      <div className="w-fit ml-auto">
        <Button type="primary">Place Your Request</Button>
      </div>
    </motion.div>
  );
}
