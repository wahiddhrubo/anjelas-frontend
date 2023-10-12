import { put, call, select } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import {
  loginSuccess,
  loginFail,
  forgotPasswordSuccess,
  loadSuccess,
  logoutSuccess,
  onError,
  userLoading,
} from "../../slice/user";
import { GET_CART, MULTIPLE_ADD_TO_CART, LOAD_USER } from "../actions";
import { getCart, getUser } from "../../selectors";

export function* login(action) {
  yield put(userLoading());
  const { email, password } = action;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/login`;
  const { items } = yield select(getCart);

  try {
    const result = yield call(() =>
      axiosCredentialsCall({ url, method: "post", data: { email, password } })
    );
    const { data } = result;
    yield put(loginSuccess(data));
    if (items) {
      yield put({ type: MULTIPLE_ADD_TO_CART, items });
    }

    yield put({ type: GET_CART });
  } catch (error) {
    yield put(onError(error.response.data.message || error.message));
    console.log(error.response.data.message || error.message);
  }
}
export function* googleSignUp(action) {
  yield put(userLoading());
  window.open(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/google`,
    "_self"
  );
}

export function* loadUser(action) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user`;

    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "get" })
    );
    yield put({ type: GET_CART });
    yield put(loadSuccess(data));
  } catch (error) {
    console.log(error.response.data.message || error.message);
  }
}
export function* logout(action) {
  yield put(userLoading());
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/logout`;

    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "get" })
    );

    yield put(logoutSuccess(data));
  } catch (error) {
    yield put(onError(error.response.data.message || error.message));
  }
}
export function* register(action) {
  yield put(userLoading());
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
    yield put(onError(error.response.data.message || error.message));

    console.log(error.response.data.message || error.message);
  }
}
export function* forgotPassword(action) {
  yield put(userLoading());
  const { email } = action;

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/indentify`;

    const { data } = yield call(() =>
      axiosCredentialsCall({ url, method: "post", data: { email } })
    );

    yield put(forgotPasswordSuccess(data));
  } catch (error) {
    yield put(onError(error.response.data.message || error.message));
  }
}
export function* resetPassword(action) {
  yield put(userLoading());
  const { confirmPassword, token, password } = action;
  const { items } = yield select(getCart);

  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/recover`;

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
    yield put(onError(error.response.data.message || error.message));

    console.log(error.response.data.message || error.message);
  }
}

export function* addLocation(action) {
  yield put(userLoading());
  const { floorNo, apartmentNo, streetAddress, area, phone, locType } = action;
  const data = {
    apartmentNo,
    floorNo,
    streetAddress,
    area,
    phone,
  };
  const slug = locType ? locType : "";
  const { user } = yield select(getUser);

  console.log(data);
  try {
    if (!user.phone) {
      console.log("working");
      const dt = { phone };
      const updateUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user`;
      console.log(dt);
      // const rslt = yield call(() =>
      //   axiosCredentialsCall({
      //     url: updateUrl,
      //     method: "post",
      //     dt,
      //   })
      // );
    }
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/locations/${slug}`;
    const result = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "post",
        data,
      })
    );
    yield put({ type: LOAD_USER });
  } catch (error) {
    yield put(onError(error.response.data.message || error.message));
  }
}
export function* deleteLocation(action) {
  const { id, locType } = action;
  const data = { id, type: locType };
  console.log(data);

  const { user } = yield select(getUser);

  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/locations/`;
    const result = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "delete",
        data,
      })
    );
    yield put({ type: LOAD_USER });
  } catch (error) {
    yield put(onError(error.response.data.message || error.message));
  }
}
