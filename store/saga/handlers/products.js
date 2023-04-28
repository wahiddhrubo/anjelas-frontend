import { PRODUCTS_FAIL, PRODUCTS_SUCCESS } from "../actions";
import { put, call } from "redux-saga/effects";
import { axiosCall } from "../call";
import { productSuccess, productFail } from "../../slice/products";
import {
  singleProductSuccess,
  singleproductFail,
} from "../../slice/singleProduct";

import { data } from "autoprefixer";
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
  } = action;
  const itemPerPage = 12;
  const baseUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass#";
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

  try {
    const fetchUrl = `${url}?${params}`;
    const result = yield call(() =>
      axiosCall({ url: fetchUrl, method: "get" })
    );

    yield put(productSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(productFail(error));
  }
}
export function* fetchSingleProducts(action) {
  const { id } = action;
  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const result = yield call(() => axiosCall({ url: baseUrl, method: "get" }));
    console.log(result);
    yield put(singleProductSuccess(result.data.drinks[0]));
  } catch (error) {
    console.log(error);
    yield put(singleproductFail(error));
  }
}
