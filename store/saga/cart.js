import { addToCartNonUser } from "../slice/cart";
import { put, call } from "redux-saga/effects";
export function* addToCartNonUser(action) {
  yield put(addToCartNonUser);
}
