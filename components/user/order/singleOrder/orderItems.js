import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";
import Button from "../../../ui/buttons";
import { current } from "@reduxjs/toolkit";
export default function OrderItems({
  item,
  setReviewModalOpen,
  setReviewItem,
  status,
}) {
  const reviewModalHandler = () => {
    setReviewModalOpen(true);
    setReviewItem(item.item);
  };
  return (
    <>
      <div className="w-[80%] mx-auto gap-5 flex my-[24px] group/div  text-left ">
        <div className="w-[120px] h-fit my-auto relative  ">
          <div className="absolute text-primary w-full h-full grid place-items-center inset-0 rounded-[5px] transition-all origin-top scale-y-0 peer-hover/div:scale-y-100 m-auto z-10 bg-white">
            #
          </div>
          <Image
            alt={item.item.name}
            src={item.item.featuredImage.url}
            width={120}
            height={120}
            className="w-[120px] h-[120px] object-cover "
          />
        </div>
        <div className="w-full">
          <Link href={`/shop/${item.item._id}`}>
            <div className="font-semibold mt-3">{item.item.name}</div>
          </Link>
          <div className="text-primary">
            ৳ {item.pricePerUnit}{" "}
            <span className=" font-semibold text-gray-600 text-[14px]">
              (x{item.quantity})
            </span>
          </div>
          {status === "delivered" ? (
            <div className="w-fit ml-auto">
              <Button onClick={reviewModalHandler} type={"review"}>
                Leave A Review
              </Button>
            </div>
          ) : (
            <div className="w-fit ml-auto">
              <Button onClick={reviewModalHandler} type={"disabled"}>
                Leave A Review
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
