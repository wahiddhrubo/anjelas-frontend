import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCartNonUser } from "../../store/slice/cart";
import { REMOVE_ITEM_FROM_CART } from "../../store/saga/actions";
import { MdClose } from "react-icons/md";
export default function Cart({ cart }) {
  return (
    <div className="absolute z-[1000] group-hover:scale-y-100 scale-y-0 transition-all duration-300 origin-top bg-white right-[-50px] top-[50px] border-primary p-8 rounded-lg border-2 w-[450px]">
      <div className="relative font-light h-full overflow-y-auto">
        {cart?.map((c, index) => (
          <CartProduct
            key={c.id}
            id={c.id}
            item={c.item}
            pricePerUnit={c.pricePerUnit}
            quantity={c.quantity}
            variant={c.variant}
          />
        ))}
      </div>
    </div>
  );
}

const CartProduct = ({ id, item, pricePerUnit, quantity, variant }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const removeItem = (e, id, _id, variant) => {
    e.stopPropagation(); // Stop the event from bubbling to Link
    e.preventDefault(); // Prevent the navigation
    setLoading(!loading);
    dispatch({ type: REMOVE_ITEM_FROM_CART, id: id || _id, variant });
    setLoading(!loading);
  };
  return (
    <div className="flex relative flex-wrap gap-3 mb-4">
      <Image
        loader={() => item.featuredImage.url || item.featuredImage}
        src={item.featuredImage?.url || item.featuredImage}
        height={50}
        width={50}
      />{" "}
      <div>
        <span className="font-semibold ">{item.name}</span> <br />
        {pricePerUnit} (x {quantity})
      </div>
      {!loading ? (
        <MdClose
          onClick={(e) => removeItem(e, id, item._id, variant)}
          size={20}
          className="ml-auto my-auto text-red-400"
        />
      ) : (
        <div class="flex items-center justify-center">
          <div class="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
