import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_FAIL, PRODUCTS_SUCCESS } from "../saga/actions";
const initialState = {};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productLoader: (state, action) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      const { items, total, pages } = action.payload;
      state.loading = false;
      state.items = items;
      state.numOfProducts = total;
      state.pages = pages;
    },
    latestProductSuccess: (state, action) => {
      const { items } = action.payload;
      state.loading = false;
      state.latestItems = items;
    },
    productFail: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  productFail,
  productLoader,
  productSuccess,
  latestProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
