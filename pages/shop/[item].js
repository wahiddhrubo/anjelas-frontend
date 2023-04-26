import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/singleProducts/hero";

function SingleItem() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { item: id } = router.query;
  const { item } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch({ type: "GET_SINGLE_PRODUCTS_LOADING", id: id });
  }, []);
  console.log(item);
  return (
    <div className="mt-20">
      {item && (
        <Hero
          featuredImg={item.strDrinkThumb}
          category={item.strCategory}
          name={item.strDrink}
          id={item.idDrink}
          price={450}
          serving={2}
          stock={10}
          description={
            item.strInstructions +
            item.strInstructionsDE +
            item.strInstructionsES +
            item.strInstructionsFR +
            item.strInstructionsIT
          }
        />
      )}
    </div>
  );
}

export default SingleItem;
