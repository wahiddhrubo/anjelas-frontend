import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCartNonUser } from "../../store/slice/cart";
import Link from "next/link";
import Button from "./buttons";
import { getCart } from "../../store/selectors";
import { ADD_TO_CART } from "../../store/saga/actions";
import Loader from "../loader";

export default function ShortProductCard({
  img,
  name,
  price,
  review,
  reviewNo,
  id,
  variant,
}) {
  const dispatch = useDispatch();
  const { items: cart, loading } = useSelector(getCart);
  const addToCartHandler = () => {
    dispatch({
      type: ADD_TO_CART,
      id,
      name,
      featuredImage: img,
      pricePerUnit: price.min,
      quantity: 1,
      variant,
    });
  };
  const checkCart = (id) => {
    const r = cart?.filter((c) => c.id === id || c.item._id === id);
    return r ? r[0] : r;
  };
  const decimalStr = (num) => [Math.round(num), 5 - Math.round(num)];
  const [intPart, remainingPart] = decimalStr(review);

  return (
    <div className="lg:w-[285px] w-[150px] md:w-[185px] p-2   text-center ">
      <div className="w-fit mx-auto relative group/div ">
        <div className="absolute w-[80%] h-[80%] grid place-items-center inset-0 rounded-[5px] transition-all origin-top scale-y-0 group-hover/div:scale-y-100 m-auto z-10 bg-white">
          {loading ? (
            <div className="p-5">
              <Loader />
            </div>
          ) : (
            <>
              {checkCart(id) ? (
                <Link href="/cart">
                  <Button type="primary">View Cart</Button>
                </Link>
              ) : (
                <Button type="primary" onClick={addToCartHandler}>
                  Add To Cart
                </Button>
              )}
            </>
          )}
        </div>
        <Image
          src={img}
          alt={name}
          width={350}
          height={350}
          className="lg:h-[350px] w-[150px] h-[150px] lg:w-[350px] object-cover"
        />
      </div>
      <div>
        <Link href={`/shop/${id}`}>
          <div className="font-semibold mt-3">{name}</div>
          <div className="text-primary">
            ৳{" "}
            {price.min === price.max ? price.min : `${price.min}-${price.max}`}
          </div>

          {review && (
            <div className="flex  justify-center flex-wrap content-center">
              {[...Array(intPart)].map((i, index) => (
                <AiTwotoneStar
                  key={index}
                  className="text-primary my-auto mx-[2px]"
                />
              ))}
              {remainingPart &&
                [...Array(remainingPart)].map((i, index) => (
                  <AiTwotoneStar
                    key={index}
                    className=" text-transparent stroke-[60px] stroke-primary my-auto mx-[2px] "
                  />
                ))}
              ({reviewNo})
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
