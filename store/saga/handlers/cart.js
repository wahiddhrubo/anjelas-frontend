import { put, call, select } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";
import {
  addToCartNonUser,
  cartLoading,
  removeFromCartNonUser,
  updateCart,
  updateCartNonUser,
} from "../../slice/cart";
import { GET_CART } from "../actions";
import { getUser } from "../../selectors";

export function* fetchCart(action) {
  yield put(cartLoading());
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart`;
    const { data } = yield call(() =>
      axiosCredentialsCall({ url: fetchUrl, method: "get" })
    );
    yield put(updateCart(data));
  } catch (error) {
    console.log(error);
  }
}
export function* addToCart(action) {
  yield put(cartLoading());
  const { id, pricePerUnit, quantity, variant, name, featuredImage } = action;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart`;

  const { user } = yield select((state) => state.user);

  if (user) {
    try {
      const result = yield call(() =>
        axiosCredentialsCall({
          url: baseUrl,
          method: "post",
          data: { item: id, pricePerUnit, quantity, variant },
        })
      );
      yield put({ type: GET_CART });
    } catch (error) {
      console.log(error);
    }
  } else {
    yield put(
      addToCartNonUser({
        id,
        item: { name, featuredImage },
        pricePerUnit,
        variant,
        quantity,
      })
    );
  }
}
export function* multipleAddToCart(action) {
  yield put(cartLoading());
  const { items } = action;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart`;

  const { user } = yield select(getUser);

  for (let item of items) {
    const { id, pricePerUnit, quantity, variant, name, featuredImage } = item;
    if (user) {
      try {
        const result = yield call(() =>
          axiosCredentialsCall({
            url: baseUrl,
            method: "post",
            data: { item: id, pricePerUnit, quantity, variant },
          })
        );
        console.log(user);
        yield put({ type: GET_CART });
      } catch (error) {
        console.log(error);
      }
    } else {
      yield put(
        addToCartNonUser({
          id,
          item: { name, featuredImage },
          pricePerUnit,
          variant,
          quantity,
        })
      );
    }
  }
}
export function* updateItemsInCart(action) {
  yield put(cartLoading());
  const { id, quantity, variant } = action;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/update/cart`;
  const { user } = yield select(getUser);
  if (user) {
    try {
      const result = yield call(() =>
        axiosCredentialsCall({
          url: baseUrl,
          method: "post",
          data: { item: id, quantity, variant },
        })
      );
      yield put({ type: GET_CART });
    } catch (error) {
      console.log(error);
    }
  } else {
    yield put(
      updateCartNonUser({
        id,
        quantity,
        variant,
      })
    );
  }
}
export function* multipleUpdatesToCart(action) {
  yield put(cartLoading());
  const { items } = action;
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/update/cart`;
  const { user } = yield select(getUser);
  for (let item of items) {
    const { id, quantity, variant } = item;
    if (user) {
      try {
        const result = yield call(() =>
          axiosCredentialsCall({
            url: baseUrl,
            method: "post",
            data: { item: id, quantity, variant },
          })
        );
        yield put({ type: GET_CART });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export function* removeItemFormCart(action) {
  const { id, variant } = action;
  const { user } = yield select(getUser);
  console.log(user);

  if (user) {
    try {
      const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/cart/${id}`;
      const { data } = yield call(() =>
        axiosCredentialsCall({ url: fetchUrl, method: "delete" })
      );
      console.log("data", data);
      yield put({ type: GET_CART });
    } catch (error) {
      console.log(error);
    }
  } else {
    yield put(removeFromCartNonUser({ id, variant }));
  }
}
