import {
  getSingleOrder,
  orderError,
  orderLoading,
  orderSucess,
  updateOrders,
} from "../../slice/order";
import { put, call, select } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";

export function* fetchOrders(action) {
  const { status } = action;
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/orders/${status}`;
    const { data } = yield call(() =>
      axiosCredentialsCall({ url: fetchUrl, method: "get" })
    );
    yield put(updateOrders(data));
  } catch (error) {
    yield put(orderError(error.response.data.message || error.message));
  }
}

export function* fetchSingleOrder(action) {
  const { id } = action;
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/orders/order/${id}`;
    const { data } = yield call(() =>
      axiosCredentialsCall({ url: fetchUrl, method: "get" })
    );
    yield put(getSingleOrder(data));
  } catch (error) {
    yield put(orderError(error.response.data.message || error.message));
  }
}
export function* createOrder(action) {
  yield put(orderLoading());
  const {
    location,
    deliveryCharge,
    tax,
    subTotal,
    total,
    coupon,
    discount,
    paymentMethod,
    deliveryDate,
    deliveryTime,
  } = action;
  const data = {
    location,
    deliveryCharge,
    tax,
    subTotal,
    total,
    coupon,
    discount,
    paymentMethod,
    deliveryDate,
    deliveryTime,
  };
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/order`;
    const result = yield call(() =>
      axiosCredentialsCall({ url: fetchUrl, method: "post", data })
    );
    yield put(orderSucess());
  } catch (error) {
    yield put(orderError(error.response.data.message || error.message));
  }
}

export function* postReview(action) {
  const { orderId, itemId, rating, comment } = action;
  const data = {
    orderId,
    itemId,
    rating,
    comment,
  };

  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/review`;
    const result = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "post",
        data,
      })
    );
  } catch (error) {
    console.log(error.response || error.message);
  }
}
