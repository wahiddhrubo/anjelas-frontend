import { updateOrders } from "../../slice/order";
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
    console.log(error);
  }
}
