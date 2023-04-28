import { put, call, select } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import {
  loginSuccess,
  loginFail,
  forgotPasswordSuccess,
  loadSuccess,
} from "../../slice/user";

export function* login(action) {
  const { email, password } = action;
  const { items } = yield select((state) => state.cart);
  if (items) {
    items.forEach((i) => {
      const { id, pricePerUnit, quantity } = i;
      console.log({ item: id, pricePerUnit, quantity });
    });
  }
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/login`;
    console.log(url);
    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "post", data: { email, password } })
    );
    console.log(data);
    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loginFail(error.response.data.message));
  }
}
export function* loadUser(action) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user`;
    console.log(url);
    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "get" })
    );
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loginFail(error.response.data.message));
  }
}
export function* logout(action) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/logout`;
    console.log(url);
    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "get" })
    );

    yield put(logoutSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
export function* register(action) {
  const { email, password, username } = action;
  const { items } = yield select((state) => state.cart);
  if (items) {
    items.forEach((i) => {
      const { id, pricePerUnit, quantity } = i;
      console.log({ item: id, pricePerUnit, quantity });
    });
  }
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/register`;

    const { data } = yield call(() =>
      axiosCredentialsCall({
        url,
        method: "post",
        data: { email, password, username },
      })
    );

    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loginFail(error.response.data.message));
  }
}
export function* forgotPassword(action) {
  const { email } = action;

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/indentify`;

    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "post", data: { email } })
    );

    yield put(forgotPasswordSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
export function* resetPassword(action) {
  const { confirmPassword, token, password } = action;
  const { items } = yield select((state) => state.cart);
  if (items) {
    items.forEach((i) => {
      const { id, pricePerUnit, quantity } = i;
      console.log({ item: id, pricePerUnit, quantity });
    });
  }
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/recover`;
    console.log(url);
    const { data } = yield call(() =>
      axiosCredentialsCall({
        url,
        method: "post",
        data: { confirmPassword, token, password },
      })
    );
    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loginFail(error.response.data.message));
  }
}
