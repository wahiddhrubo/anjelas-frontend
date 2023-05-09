import { put, call, select } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import {
  loginSuccess,
  loginFail,
  forgotPasswordSuccess,
  loadSuccess,
  logoutSuccess,
} from "../../slice/user";
import { GET_CART, MULTIPLE_ADD_TO_CART } from "../actions";
import { getCart } from "../../selectors";

export function* login(action) {
  const { email, password } = action;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/login`;
  const { items } = yield select(getCart);
  try {
    console.log(url);
    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "post", data: { email, password } })
    );
    if (items) {
      yield put({ type: MULTIPLE_ADD_TO_CART, items });
    }

    yield put({ type: GET_CART });
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
    yield put({ type: GET_CART });
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loginFail(error.response.data.message));
  }
}
export function* logout(action) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/logout`;
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
  const { items } = yield select(getCart);

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/register`;

    const { data } = yield call(() =>
      axiosCredentialsCall({
        url,
        method: "post",
        data: { email, password, username },
      })
    );
    if (items) {
      yield put({ type: MULTIPLE_ADD_TO_CART, items });
    }
    yield put({ type: GET_CART });

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
  const { items } = yield select(getCart);

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
    if (items) {
      yield put({ type: MULTIPLE_ADD_TO_CART, items });
    }
    yield put({ type: GET_CART });
    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loginFail(error.response.data.message));
  }
}

export function* addLocation(action) {
  const { floorNo, apartmentNo, streetAddress, area, phone, locType } = action;
  const data = { floorNo, apartmentNo, streetAddress, area, phone };
  const slug = locType ? locType : "";
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/locations/${slug}`;
    const result = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "post",
        data,
      })
    );
    console.log(result);
  } catch (error) {
    console.log(error.response.data.message);
  }
}
