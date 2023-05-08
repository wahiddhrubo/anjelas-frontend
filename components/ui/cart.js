import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCartNonUser } from "../../store/slice/cart";
export default function Cart({ cart }) {
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeFromCartNonUser({ id: id }));
  };
  console.log(cart);
  return (
    <div className="absolute z-[1000] group-hover:scale-y-100 scale-y-0 transition-all duration-300 origin-top bg-white right-[-50px] top-[50px] border-primary p-8 rounded-lg border-2 w-[450px]">
      <div className="relative font-light h-full overflow-y-auto">
        {cart?.map((c) => (
          <div className="flex relative flex-wrap gap-3 mb-4">
            <Image
              loader={() => c.item.featuredImage}
              src={c.item.featuredImage}
              height={50}
              width={50}
            />{" "}
            <div>
              <div
                onClick={() => removeHandler(c.id)}
                className="font-light absolute text-[20px] top-[-10px] cursor-pointer right-10 text-red-500"
              >
                x
              </div>
              <span className="font-semibold ">{c.item.name}</span> <br />
              {c.pricePerUnit} (x {c.quantity})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
