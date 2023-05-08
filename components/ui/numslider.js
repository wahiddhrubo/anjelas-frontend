import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";

export default function NumberSlider({
  min,
  max,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}) {
  const rangeHandler = (e) => {
    setMinValue(Math.ceil(e[0]));
    setMaxValue(Math.ceil(e[1]));
  };
  return (
    <RangeSlider
      min={min}
      max={max}
      className="numSlider"
      step="any"
      value={[minValue, maxValue]}
      onInput={(e) => rangeHandler(e)}
    />
  );
}
