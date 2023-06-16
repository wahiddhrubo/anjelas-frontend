import React from "react";
import { deliveryFee, taxRate } from "../../lib/constants";
import { useSelector } from "react-redux";
export default function CartTotal() {
  const { price } = useSelector((state) => state.cart);
  const totalServiceFee = taxRate * price;
  return (
    <div className="md:text-[16px] text-[14px]">
      <div className="font-semibold lg:text-[32px] text-[22px] leading-relaxed text-primary">
        Cart Totals
      </div>
      <table className="lg:mt-10 mt-4 w-full">
        <tr className="">
          <td className=" md:py-2 font-semibold text-[16px]  lg:text-[24px] ">
            Subtotal
          </td>
          <td className=" md:py-2 font-semibold text-primary ">{price}</td>
        </tr>
        <tr className="">
          <td className=" md:py-2 font-semibold ">Delivery Fee</td>
          <td className=" md:py-2 font-semibold  text-primary ">
            {deliveryFee}
          </td>
        </tr>
        <tr className="border-b-2 border-primary">
          <td className=" md:py-2 font-semibold ">Tax</td>
          <td className=" md:py-2 font-semibold  text-primary ">
            {totalServiceFee}
          </td>
        </tr>
        <tr className="">
          <td className=" md:py-2 lg:text-[24px] text-[18px] font-semibold ">
            Total
          </td>
          <td className=" md:py-2 font-semibold lg:text-[20px] text-[18px]  text-primary ">
            {totalServiceFee + deliveryFee + price}
          </td>
        </tr>
      </table>
    </div>
  );
}
