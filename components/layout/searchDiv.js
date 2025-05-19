import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/selectors";
import { useEffect } from "react";
import { SEARCHED_PRODUCT } from "../../store/saga/actions";
import Loader from "../loader";
import ProductCard from "../ui/productCard";
import Link from "next/link";

export default function SearchDiv() {
  const { searchItems, searchLoading } = useSelector(getProducts);

  return (
    <div>
      {searchLoading ? (
        <div className="w-1/4 mx-auto h-[calc(100vh-75px)] my-16">
          <Loader />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-10 my-16  justify-between">
          {searchItems.map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              id={item._id}
              review={item.review}
              price={item.price}
              img={item.featuredImage.url}
              variant={item.skus[0].name}
            />
          ))}
        </div>
      )}
      {searchItems.length === 0 && (
        <div className="text-body-lg text-center font-bold mx-auto h-[calc(100vh-75px)] my-16">
          No Dish Found 😞.{" "}
          <Link href={"/contact-us"} className="text-primary hover:text-black">
            Contact Us
          </Link>{" "}
          For Custom Order.
        </div>
      )}
    </div>
  );
}
