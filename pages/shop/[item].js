import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/singleProducts/hero";

function SingleItem() {
  const dispatch = useDispatch();
  const skus = [
    {
      name: "Full",
      price: 4100,
      serving: 10,
      sku: 1,
    },
    {
      name: "Half",
      price: 400,
      serving: 2,
      sku: 2,
    },
  ];
  const [sku, setSku] = useState(skus[0]);
  const router = useRouter();
  const { item: id } = router.query;
  const { item } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch({ type: "GET_SINGLE_PRODUCTS_LOADING", id: id });
  }, []);

  return (
    <div className="mt-20">
      {item && (
        <Hero
          featuredImg={item.strDrinkThumb}
          category={item.strCategory}
          name={item.strDrink}
          id={item.idDrink}
          stock={10}
          description={
            item.strInstructions +
            item.strInstructionsDE +
            item.strInstructionsES +
            item.strInstructionsFR +
            item.strInstructionsIT
          }
          skus={skus}
          sku={sku}
          setSku={setSku}
        />
      )}
    </div>
  );
}

export default SingleItem;
