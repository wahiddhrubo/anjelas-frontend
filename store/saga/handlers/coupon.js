import { put, call } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import { couponError, couponLoading, updateCoupon } from "../../slice/coupon";

export function* fetchCoupon(action) {
  yield put(couponLoading());
  const { code, totalAmount, deliveryCharge } = action;
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/coupon/${code}`;
    const { data } = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "post",
        data: { totalAmount, deliveryCharge },
      })
    );
    const { total, discount } = data;
    console.log(data);
    yield put(updateCoupon({ total, discount }));
  } catch (error) {
    yield put(couponError(error.response.data.message || error.message));
  }
}
