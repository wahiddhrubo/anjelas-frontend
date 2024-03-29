import { takeLatest } from "redux-saga/effects";
import {
  fetchLatestProducts,
  fetchProducts,
  fetchSearchedProducts,
  fetchSingleProducts,
} from "./handlers/products";
import {
  PRODUCTS_LOADING,
  LOGOUT,
  FORGOT_PASSWORD,
  REGISTER,
  RESET_PASSWORD,
  LOGIN,
  SINGLE_PRODUCTS_LOADING,
  LOAD_USER,
  GET_CART,
  ADD_LOCATION,
  ADD_TO_CART,
  MULTIPLE_ADD_TO_CART,
  UPDATE_CART,
  MULTIPLE_UPDATE_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_LOCATION,
  LATEST_PRODUCT,
  GET_ORDERS,
  POST_REVIEW,
  GET_SINGLE_ORDERS,
  CREATE_ORDER,
  SEARCHED_PRODUCT,
  GET_COUPON,
  GOOGLE_SIGN_IN,
} from "./actions";
import {
  login,
  logout,
  forgotPassword,
  resetPassword,
  register,
  loadUser,
  addLocation,
  deleteLocation,
  googleSignUp,
} from "./handlers/user";
import {
  addToCart,
  fetchCart,
  multipleAddToCart,
  multipleUpdatesToCart,
  removeItemFormCart,
  updateItemsInCart,
} from "./handlers/cart";
import {
  createOrder,
  fetchOrders,
  fetchSingleOrder,
  postReview,
} from "./handlers/orders";
import { fetchCoupon } from "./handlers/coupon";

export default function* rootSaga() {
  yield takeLatest(PRODUCTS_LOADING, fetchProducts);
  yield takeLatest(LATEST_PRODUCT, fetchLatestProducts);
  yield takeLatest(SINGLE_PRODUCTS_LOADING, fetchSingleProducts);
  yield takeLatest(LOGIN, login);
  yield takeLatest(GOOGLE_SIGN_IN, googleSignUp);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOAD_USER, loadUser);
  yield takeLatest(GET_CART, fetchCart);
  yield takeLatest(ADD_LOCATION, addLocation);
  yield takeLatest(ADD_TO_CART, addToCart);
  yield takeLatest(MULTIPLE_ADD_TO_CART, multipleAddToCart);
  yield takeLatest(UPDATE_CART, updateItemsInCart);
  yield takeLatest(MULTIPLE_UPDATE_CART, multipleUpdatesToCart);
  yield takeLatest(REMOVE_ITEM_FROM_CART, removeItemFormCart);
  yield takeLatest(DELETE_LOCATION, deleteLocation);
  yield takeLatest(GET_ORDERS, fetchOrders);
  yield takeLatest(CREATE_ORDER, createOrder);
  yield takeLatest(POST_REVIEW, postReview);
  yield takeLatest(GET_SINGLE_ORDERS, fetchSingleOrder);
  yield takeLatest(SEARCHED_PRODUCT, fetchSearchedProducts);
  yield takeLatest(GET_COUPON, fetchCoupon);
}
