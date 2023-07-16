import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/selectors";
import { useEffect } from "react";
import { SEARCHED_PRODUCT } from "../../store/saga/actions";
import Loader from "../loader";
import ProductCard from "../ui/productCard";

export default function SearchDiv() {
  const { searchItems, searchLoading } = useSelector(getProducts);

  return (
    <div>
      {searchLoading ? (
        <div className="w-1/4 mx-auto my-16">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap  justify-between">
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
    </div>
  );
}
