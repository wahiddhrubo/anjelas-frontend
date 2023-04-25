import { takeLatest } from "redux-saga/effects";
import { fetchProducts } from "./products";
import { PRODUCTS_LOADING } from "./actions";

export default function* rootSaga() {
  yield takeLatest(PRODUCTS_LOADING, fetchProducts);
}
