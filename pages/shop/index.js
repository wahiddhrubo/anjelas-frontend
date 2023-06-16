import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ui/productCard";
import Filter from "../../components/products/filter";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Pagination from "../../components/ui/pagination";
import Sort from "../../components/products/sort";
import { useState } from "react";

export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [descending, setDescending] = useState(false);

  const keyword = searchParams.get("keyword");
  const categories = searchParams.get("categories");
  const price = searchParams.get("price");
  const currentPage = searchParams.get("page");
  const sortBy = searchParams.get("sortBy");

  const setQueryFilter = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );

  const dispatch = useDispatch();
  const { items, pages } = useSelector((state) => state.products);
  useEffect(() => {
    const prc = price ? price.split("-") : null;

    dispatch({
      type: "GET_PRODUCTS_LOADING",
      keyword,
      categories,
      descending,
      sortBy,
      minPrice: prc ? prc[0] : null,
      maxPrice: prc ? prc[1] : null,
      page: currentPage,
    });
  }, [dispatch, keyword, descending, sortBy, categories, price, currentPage]);
  return (
    <div className="flex  lg:flex-nowrap flex-wrap justify-between mt-20 ">
      <div className="flex  flex-wrap justify-between gap-[5%] gap-y-[5%] lg:w-[63%] w-full ">
        <div className="w-full flex flex-wrap">
          <div className="w-fit mr-auto font-semibold lg:text-[32px] text-[20px] mb-5">
            Our Collections
          </div>
          <Sort
            sortBy={sortBy}
            setDescending={setDescending}
            setQueryFilter={setQueryFilter}
          />
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
        <div className="w-full text-center">
          <Pagination
            totalPages={pages}
            setPage={setQueryFilter}
            currentPage={currentPage || 1}
          />
        </div>
      </div>
      <Filter
        setQueryFilter={setQueryFilter}
        featuredProducts={items?.slice(5, 10)}
      />
    </div>
  );
}
