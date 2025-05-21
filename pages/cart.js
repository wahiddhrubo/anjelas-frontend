import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";
import { updateCartNonUser, removeFromCartNonUser } from "../store/slice/cart";
import Button from "../components/ui/buttons";
import Link from "next/link";
import {
  GET_COUPON,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART,
} from "../store/saga/actions";
import CartTotal from "../components/ui/cartTotal";
import { deliveryFee, taxRate } from "../lib/constants";
export default function Cart() {
  const { items, price } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartNum, setCartNum] = useState([]);
  const [code, setCode] = useState("");
  const updateCartHandler = () => {
    cartNum.forEach((c) => {
      console.log(c);
      dispatch({
        type: UPDATE_CART,
        id: c.id,
        quantity: c.quantity,
        variant: c.variant,
      });
    });
  };

  const removeItem = (id, _id, variant) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, id: id || _id, variant });
  };

  const changeCart = (id, quantity, variant) => {
    const match = cartNum.findIndex(
      (c) => c.id === id && c.variant === variant
    );
    if (match >= 0) {
      setCartNum((prev) => prev.filter((p) => p.id !== id));
      setCartNum((prev) => [
        ...prev,
        { id: id, variant, quantity: parseInt(quantity) },
      ]);
    } else {
      setCartNum((prev) => [
        ...prev,
        { id: id, variant, quantity: parseInt(quantity) },
      ]);
    }
  };

  const couponHandler = () => {
    const totalAmount = price * taxRate + price + deliveryFee;
    dispatch({ type: GET_COUPON, totalAmount, deliveryFee, code });
  };
  return (
    <div className="md:w-[80%] mx-auto">
      <table className="w-full mt-20">
        <tr className="py-[25px] border-b-2 border-primary">
          <th className="text-left  md:w-[155px] text-[24px] text-primary py-[25px] "></th>
          <th className="text-left text-[14px] px-1 lg:text-[24px] text-primary py-[25px] w-[30%] ">
            Name
          </th>
          <th className="text-left text-[14px] px-1 lg:text-[24px] text-primary py-[25px]">
            Price
          </th>
          <th className="text-left text-[14px] px-1 lg:text-[24px] text-primary py-[25px]">
            Quantity{" "}
          </th>
          <th className="text-left text-[14px] px-1 lg:text-[24px] text-primary py-[25px]">
            Subtotal{" "}
          </th>
        </tr>

        {items?.map((i, index) => (
          <tr
            key={index}
            className="border-b-2 text-[12px] leading-5 md:text-[16px] border-primary "
          >
            <td className="py-[25px] h-fit my-auto flex gap-2 ">
              <span
                onClick={() => removeItem(i.id, i.item._id, i.variant)}
                className="my-auto cursor-pointer text-primary "
              >
                x
              </span>
              <Link href={`/shop/${i.id || i.item._id}`}>
                <Image
                  src={i.item.featuredImage.url || i.item.featuredImage}
                  width={120}
                  height={120}
                  className="lg:w-[120px] lg:h-[120px] object-cover rounded-md w-[80px] h-[80px]  "
                />{" "}
              </Link>
            </td>
            <td className="py-[25px] font-semibold lg:text-2xl">
              <Link href={`/shop/${i.id || i.item._id}`}>
                <span className="my-auto ">{i.item.name}</span>
              </Link>
            </td>
            <td className="py-5 md:text-left text-center">{i.pricePerUnit}</td>
            <td className="py-5 md:text-left text-center relative">
              <input
                type="number"
                defaultValue={i.quantity}
                onChange={(e) => changeCart(i.id, e.target.value, i.variant)}
                className="md:w-[52px] w-[35px] focus-visible:outline-none rounded-[0] mx-auto border-2 md:p-2 p-1 border-primary"
              />
              <div className="absolute inset-y-0 h-fit left-7 my-auto">
                <MdOutlineKeyboardArrowUp className="text-primary" />
                <MdOutlineKeyboardArrowDown className="text-primary" />
              </div>
            </td>
            <td className="py-5">{i.pricePerUnit * i.quantity}</td>
          </tr>
        ))}
      </table>
      <div className="flex md:flex-nowrap md:flex-row flex-wrap flex-col-reverse gap-5 justify-between mt-10 ">
        <div className="flex md:w-[75%] gap-10">
          <div className="flex justify-between w-full">
            <input
              type="text"
              placeholder="Coupon"
              onChange={(e) => setCode(e.target.value)}
              className="md:w-[250px] text-[12px] w-[150px] placeholder:font-semibold placeholder:text-black px-5 border-2 border-primary font-semibold"
            />
            <Button type={"primary"} onClick={couponHandler}>
              Apply Coupon
            </Button>
          </div>
        </div>
        <div className="w-fit ml-auto">
          <Button type={"primary"} onClick={updateCartHandler}>
            Update Cart
          </Button>
        </div>
      </div>
      {items && items.length ? (
        <div className="my-20 ">
          <CartTotal />
          <div className="my-10 w-fit ml-auto ">
            <Link href="/checkout">
              <Button type={"primary"}>Proceed To Checkout</Button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
