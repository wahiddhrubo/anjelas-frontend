import React from "react";
import Lottie from "lottie-react";
import animationData from "../utils/loader.json";

export default function Loader() {
  return (
    <div className=" ">
      <Lottie animationData={animationData} />
    </div>
  );
}
