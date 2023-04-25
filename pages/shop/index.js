import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ui/productCard";
import Filter from "../../components/products/filter";

export default function Products() {
  const categories = [
    "Eid Specials",
    "Breakfast",
    "Express",
    "Favourites!",
    "Pithas",
    "Under 250!",
    "Healthy",
    "Drinks",
    "Kebab",
    "Dessert",
    "Baked",
    "Cakes",
    "Tiffin",
    "For 1",
    "Biryani",
    "Curry",
    "Platter",
    "Spicy Foods",
    "Dawat",
    "Achar &amp; Sauce",
    "Groceries",
    "Pitha",
  ];
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS_LOADING" });
  }, [dispatch]);

  return (
    <div className="flex mt-20">
      <div className="flex flex-wrap gap-[5%] gap-y-[5%] w-[68%] ">
        <div className="w-full  font-semibold text-[32px] mb-5">
          Our Collections
        </div>
        {items?.slice(1, 10).map((i) => (
          <ProductCard
            name={i.strDrink}
            id={i.idDrink}
            review={4.2}
            price={450}
            img={i.strDrinkThumb}
          />
        ))}
      </div>
      <Filter categories={categories} featuredProducts={items?.slice(5, 10)} />
    </div>
  );
}
