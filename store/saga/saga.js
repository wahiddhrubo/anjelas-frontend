import { takeLatest } from "redux-saga/effects";
import { fetchProducts, fetchSingleProducts } from "./products";
import { PRODUCTS_LOADING, SINGLE_PRODUCTS_LOADING } from "./actions";

export default function* rootSaga() {
  yield takeLatest(PRODUCTS_LOADING, fetchProducts);
  yield takeLatest(SINGLE_PRODUCTS_LOADING, fetchSingleProducts);
}
