import { takeLatest } from "redux-saga/effects";
import { fetchProducts, fetchSingleProducts } from "./handlers/products";
import {
  PRODUCTS_LOADING,
  LOGOUT,
  FORGOT_PASSWORD,
  REGISTER,
  RESET_PASSWORD,
  LOGIN,
  SINGLE_PRODUCTS_LOADING,
  LOAD_USER,
} from "./actions";
import {
  login,
  logout,
  forgotPassword,
  resetPassword,
  register,
  loadUser,
} from "./handlers/user";

export default function* rootSaga() {
  yield takeLatest(PRODUCTS_LOADING, fetchProducts);
  yield takeLatest(SINGLE_PRODUCTS_LOADING, fetchSingleProducts);
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOAD_USER, loadUser);
}
