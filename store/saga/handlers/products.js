import { PRODUCTS_FAIL, PRODUCTS_SUCCESS } from "../actions";
import { put, call } from "redux-saga/effects";
import { axiosCall } from "../call";
import {
  productSuccess,
  productFail,
  latestProductSuccess,
} from "../../slice/products";
import {
  singleProductSuccess,
  singleproductFail,
} from "../../slice/singleProduct";

export function* fetchProducts(action) {
  const {
    keyword,
    categories,
    minStock,
    maxStock,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    tags,
    page,
    sortBy,
  } = action;
  const itemPerPage = 8;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/items`;
  const url = new URL(baseUrl);
  const params = new URLSearchParams(url.search);
  params.set("keyword", keyword || "");
  params.set("categories", categories || "");
  params.set("tags", tags || "");
  params.set("maxRating", maxRating || "");
  params.set("minRating", minRating || "");
  params.set("minStock", minStock || "");
  params.set("maxStock", maxStock || "");
  params.set("minPrice", minPrice || "");
  params.set("maxPrice", maxPrice || "");
  params.set("itemPerPage", itemPerPage);
  params.set("page", page);
  params.set("sortBy", sortBy);
  console.log(sortBy);

  try {
    const fetchUrl = `${url}?${params}`;
    const { data } = yield call(() =>
      axiosCall({ url: fetchUrl, method: "get" })
    );
    const { data: items, metadata } = data.items[0];

    const { total } = metadata[0];
    const pages = Math.ceil(total / itemPerPage);
    yield put(
      productSuccess({
        items,
        total,
        pages,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(productFail(error));
  }
}
export function* fetchLatestProducts(action) {
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/items`;
  console.log(baseUrl);
  const url = new URL(baseUrl);
  const params = new URLSearchParams(url.search);
  params.set("sortBy", "createdAt");

  try {
    const fetchUrl = `${url}?${params}`;
    const { data } = yield call(() =>
      axiosCall({ url: fetchUrl, method: "get" })
    );
    const { data: items } = data.items[0];

    yield put(latestProductSuccess({ items }));
  } catch (error) {
    console.log(error);
    yield put(productFail(error));
  }
}
export function* fetchSingleProducts(action) {
  const { id } = action;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/items/${id}`;

  try {
    const result = yield call(() => axiosCall({ url: baseUrl, method: "get" }));
    console.log(result);
    yield put(singleProductSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(singleproductFail(error));
  }
}
