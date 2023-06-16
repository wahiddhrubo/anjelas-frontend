import React from "react";

export default function OrderTable({
  subTotal,
  tax,
  deliveryFee,
  uId,
  total,
  discount = 0,
}) {
  return (
    <div className="w-[60%]">
      <table className="lg:mt-4 mt-2 w-full">
        <tr className="">
          <td className=" md:py-2 font-semibold   ">Order Id</td>
          <td className=" md:py-2 font-semibold text-right ">#{uId}</td>
        </tr>
        <tr className="">
          <td className=" md:py-2 font-semibold   ">Subtotal</td>
          <td className=" md:py-2 font-semibold text-right ">{subTotal}</td>
        </tr>
        <tr className="">
          <td className=" md:py-2 font-semibold ">Delivery Fee</td>
          <td className=" md:py-2 font-semibold text-right ">{deliveryFee}</td>
        </tr>
        <tr className=" border-primary">
          <td className=" md:py-2 font-semibold ">Tax</td>
          <td className=" md:py-2 font-semibold text-right ">{tax}</td>
        </tr>
        <tr className="border-b-[3px] border-primary">
          <td className=" md:py-2 font-semibold ">Discount</td>
          <td className=" md:py-2 font-semibold text-right ">-{discount}</td>
        </tr>
        <tr className="">
          <td className=" md:py-2 lg:text-[24px] text-[18px] font-semibold ">
            Total
          </td>
          <td className=" md:py-2 font-semibold lg:text-[20px] text-[18px] text-right ">
            {total}
          </td>
        </tr>
      </table>
    </div>
  );
}
