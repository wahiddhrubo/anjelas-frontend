import { put, call } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import { productSuccess, productFail } from "../../slice/products";
import { updateCart } from "../../slice/cart";
export function* fetchCart(action) {
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart`;
    const { data } = yield call(() =>
      axiosCredentialsCall({ url: fetchUrl, method: "get" })
    );
    console.log(data);
    yield put(updateCart(data));
  } catch (error) {
    console.log(error);
  }
}
export function* addToCart(action) {
  const { id, pricePerUnit, quantity } = action;
  const baseUrl = `${pricess.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart`;

  try {
    const result = yield call(() =>
      axiosCredentialsCall({
        url: baseUrl,
        method: "post",
        data: { item: id, pricePerUnit, quantity },
      })
    );
    console.log(result);
    yield put(updateCart(result.data));
  } catch (error) {
    console.log(error);
  }
}
