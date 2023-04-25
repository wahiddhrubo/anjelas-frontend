import React from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCartNonUser } from "../../store/slice/cart";
import Link from "next/link";

export default function ProductCard({
  img,
  name,
  price,
  review,
  reviewNo,
  id,
}) {
  const dispatch = useDispatch();
  const { items: cart } = useSelector((state) => state.cart);
  const addToCartHandler = () => {
    dispatch(
      addToCartNonUser({
        id,
        item: { name: name, featuredImage: img },
        pricePerUnit: price,
        quantity: 1,
      })
    );
  };
  const checkCart = (id) => {
    const r = cart.filter((c) => c.id === id);
    console.log(r[0]);
    return r[0];
  };
  const decimalStr = (num) => [Math.round(num), 5 - Math.round(num)];
  const [intPart, remainingPart] = decimalStr(review);

  return (
    <div className="lg:w-[350px] p-2  my-[5%] text-center ">
      <div className="w-fit mx-auto relative group/div ">
        <div className="absolute w-[80%] h-[80%] grid place-items-center inset-0 rounded-[5px] transition-all origin-top scale-y-0 group-hover/div:scale-y-100 m-auto z-10 bg-white">
          <div
            onClick={addToCartHandler}
            className="px-[45px] cursor-pointer group/button overflow-hidden relative font-semibold border-2 border-primary  py-[12px] bg-transparent text-primary "
          >
            <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100 top-0 rotate-45 origin-top left-8 bg-primary w-[1.5px]"></div>
            <div className="absolute transition-all duration-150 h-full scale-y-0 group-hover/button:scale-y-100  rotate-45 origin-bottom right-8 bg-primary w-[1.5px]"></div>

            {checkCart(id) ? "View Cart" : "Add To Cart"}
          </div>
        </div>
        <Image
          loader={() => img}
          src={img}
          width={350}
          height={350}
          className=""
        />
      </div>
      <div>
        <Link href={`/shop/${id}`}>
          <div className="font-semibold mt-3">{name}</div>
          <div className="text-primary">৳ {price}</div>

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
        </Link>
      </div>
    </div>
  );
}
