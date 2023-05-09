import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ui/productCard";
import Filter from "../../components/products/filter";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const keyword = searchParams.get("keyword");
  const categories = searchParams.get("categories");
  const price = searchParams.get("price");

  const setQueryFilter = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  console.log(items);
  useEffect(() => {
    const prc = price ? price.split("-") : null;

    dispatch({
      type: "GET_PRODUCTS_LOADING",
      keyword,
      categories,
      minPrice: prc ? prc[0] : null,
      maxPrice: prc ? prc[1] : null,
    });
  }, [dispatch, keyword, categories, price]);

  return (
    <div className="flex  lg:flex-nowrap flex-wrap justify-center mt-20 gap-10">
      <div className="flex justify-center flex-wrap gap-[5%] gap-y-[5%] lg:w-[68%] w-full ">
        <div className="w-full  font-semibold text-[32px] mb-5">
          Our Collections
        </div>
        {items?.slice(0, 10).map((i) => (
          <ProductCard
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
      <Filter
        setQueryFilter={setQueryFilter}
        featuredProducts={items?.slice(5, 10)}
      />
    </div>
  );
}
