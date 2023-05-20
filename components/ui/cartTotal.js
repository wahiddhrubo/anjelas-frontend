import React from "react";
import { deliveryFee, serviceFee } from "../../lib/constants";
import { useSelector } from "react-redux";
export default function CartTotal() {
  const { price } = useSelector((state) => state.cart);
  const totalServiceFee = serviceFee * price;
  return (
    <div className="">
      <div className="font-semibold text-[32px] leading-relaxed text-primary">
        Cart Totals
      </div>
      <table className="mt-10 w-full">
        <tr className="">
          <td className="py-2 font-semibold text-[24px] ">Subtotal</td>
          <td className="py-2 font-semibold text-primary ">{price}</td>
        </tr>
        <tr className="">
          <td className="py-2 font-semibold ">Delivery Fee</td>
          <td className="py-2 font-semibold  text-primary ">{deliveryFee}</td>
        </tr>
        <tr className="border-b-2 border-primary">
          <td className="py-2 font-semibold ">Service Fee</td>
          <td className="py-2 font-semibold  text-primary ">
            {totalServiceFee}
          </td>
        </tr>
        <tr className="">
          <td className="py-2 text-[24px] font-semibold ">Total</td>
          <td className="py-2 font-semibold text-[20px]  text-primary ">
            {totalServiceFee + deliveryFee + price}
          </td>
        </tr>
      </table>
    </div>
  );
}
