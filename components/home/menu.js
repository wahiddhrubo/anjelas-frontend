import React from "react";
import SliderComp from "../ui/sliderComp";
import ShortProductCard from "../ui/shortCard";

export default function Menu({ items }) {
  return (
    <div className="">
      <div className=" font-semibold text-[24px] lg:text-heading-md ">
        Our Latest Items
      </div>
      <div>
        <div>
          <SliderComp>
            {items?.slice(0, 6).map((i) => (
              <ShortProductCard
                key={i._id}
                name={i.name}
                id={i._id}
                review={i.review}
                price={i.price}
                img={i.featuredImage.url}
                variant={i.skus[0].name}
              />
            ))}
          </SliderComp>
        </div>
      </div>
    </div>
  );
}
