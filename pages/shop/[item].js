import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/singleProducts/hero";

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
  console.log(id);
  const { item } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch({ type: "GET_SINGLE_PRODUCTS_LOADING", id: id });
  }, [id]);
  useEffect(() => {
    if (item) {
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
    </div>
  );
}

export default SingleItem;
