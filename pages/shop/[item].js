import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/singleProducts/hero";
import { PRODUCTS_LOADING } from "../../store/saga/actions";
import { getProducts } from "../../store/selectors";
import ShortProductCard from "../../components/ui/shortCard";
function SingleItem() {
  const dispatch = useDispatch();

  const defaultSku = {
    name: "",
    price: 0,
    serving: "0",
    sku: 0,
    _id: "0",
  };

  const [sku, setSku] = useState(defaultSku);
  const router = useRouter();

  const { item: id } = router.query;

  const { item } = useSelector((state) => state.singleProduct);
  const { items } = useSelector(getProducts);
  useEffect(() => {
    dispatch({ type: "GET_SINGLE_PRODUCTS_LOADING", id: id });
  }, [id]);

  useEffect(() => {
    if (item) {
      dispatch({ type: PRODUCTS_LOADING, categories: item.categories[0] });
      setSku(item.skus[0]);
    }
  }, [item]);

  return (
    <div className="mt-20">
      {item && (
        <Hero
          key={item._id}
          name={item.name}
          id={item._id}
          review={item.review}
          gallery={item.gallery}
          featuredImg={item.featuredImage}
          category={item.categories}
          stock={item.stock}
          description={item.description}
          skus={item.skus}
          sku={sku}
          setSku={setSku}
        />
      )}
      <div className="flex mt-[200px] mb-[150px] flex-wrap gap-5 ">
        <div className=" text-heading-md font-semibold w-full my-5  ">
          Similar Items
        </div>
        {items?.map((i) => (
          <ShortProductCard
            key={i._id}
            name={i.name}
            id={i._id}
            review={i.review}
            price={i.price}
            img={i.featuredImage.url}
            variant={i.skus[0].name}
          />
        ))}
      </div>
    </div>
  );
}

export default SingleItem;
