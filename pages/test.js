import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/ui/buttons";
import Loader from "../components/loader";
export default function Orders() {
  const order = {
    items: [
      {
        item: {
          _id: "64552c5926e0d2f4806fcc39",
          name: "Butter Chicken",
          featuredImage: {
            public_id: "https://res.cloudinary.com",
            url: "https://res.cloudinary.com/dg4fcymep/image/upload/v1683303512/Anjelas-kitchen/hkpb130tw43qz8wk9wtz.jpg",
            created_at: "2023-05-05T16:18:33.022Z",
          },
          skus: [
            {
              name: "Full",
              price: 1500,
              serving: "1kg",
              sku: 1,
              _id: "64552c5926e0d2f4806fcc3c",
            },
          ],
        },
        pricePerUnit: 1500,
        quantity: 1,
        _id: "648af0759f6f6a6f0826a984",
      },
      {
        item: {
          _id: "6455274d26e0d2f4806fcc26",
          name: "Shami Kebab",
          featuredImage: {
            public_id: "https://res.cloudinary.com",
            url: "https://res.cloudinary.com/dg4fcymep/image/upload/v1683302220/Anjelas-kitchen/o2trir2fjxe6wnf06rhx.jpg",
            created_at: "2023-05-05T15:57:01.550Z",
          },
          skus: [
            {
              name: "Half",
              price: 450,
              serving: "5pc",
              sku: 1,
              _id: "6455274d26e0d2f4806fcc29",
            },
            {
              name: "Full",
              price: 850,
              serving: "10pc",
              sku: 2,
              _id: "6455274d26e0d2f4806fcc2a",
            },
          ],
        },
        pricePerUnit: 450,
        quantity: 1,
        _id: "648af0759f6f6a6f0826a98d",
      },
    ],
  };

  return (
    <div className="my-20">
      {order.items.map((s) => (
        <>
          <div className="w-1/2 gap-5 flex my-[24px] group/div  text-left ">
            <div className="w-[120px] h-fit my-auto relative  ">
              <div className="absolute text-primary w-full h-full grid place-items-center inset-0 rounded-[5px] transition-all origin-top scale-y-0 peer-hover/div:scale-y-100 m-auto z-10 bg-white">
                #
              </div>
              <Image
                alt={s.item.name}
                src={s.item.featuredImage.url}
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-cover "
              />
            </div>
            <div className="w-full">
              <Link href={`/shop/${s.item._id}`}>
                <div className="font-semibold mt-3">{s.item.name}</div>
              </Link>
              <div className="text-primary">
                ৳ {s.pricePerUnit}{" "}
                <span className=" font-semibold text-gray-600 text-[14px]">
                  (x{s.quantity})
                </span>
              </div>
              <div className="w-fit ml-auto">
                <Button type={"review"}>Leave A Review</Button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
