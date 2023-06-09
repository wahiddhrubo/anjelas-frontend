import React from "react";
import Slider from "react-slick";

export default function SliderComp({ numOfSlides, children }) {
  const opts = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: numOfSlides || 4,
    slidesToScroll: 2,
    dotsClass: "primary !flex my-2 justify-center gap-2",
    customPaging: (dots) => (
      <div className="bg flex cursor-pointer flex-wrap overflow-hidden justify-center content-center w-[22px] h-[22px] bg-transparent rounded-full border-2 border-[#1b1b1b]">
        <div className="dot bg-[#1b1b1b] rounded-full  w-[10px] h-[10px] ">
          {" "}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="my-5">
      <Slider className="" {...opts}>
        {children}
      </Slider>
    </div>
  );
}
