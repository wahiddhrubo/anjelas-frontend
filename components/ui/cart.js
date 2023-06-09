import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCartNonUser } from "../../store/slice/cart";
import { REMOVE_ITEM_FROM_CART } from "../../store/saga/actions";
export default function Cart({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="absolute z-[1000] group-hover:scale-y-100 scale-y-0 transition-all duration-300 origin-top bg-white right-[-50px] top-[50px] border-primary p-8 rounded-lg border-2 w-[450px]">
      <div className="relative font-light h-full overflow-y-auto">
        {cart?.map((c, index) => (
          <div key={index} className="flex relative flex-wrap gap-3 mb-4">
            <Image
              loader={() => c.item.featuredImage.url || c.item.featuredImage}
              src={c.item.featuredImage?.url || c.item.featuredImage}
              height={50}
              width={50}
            />{" "}
            <div>
              <span className="font-semibold ">{c.item.name}</span> <br />
              {c.pricePerUnit} (x {c.quantity})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
