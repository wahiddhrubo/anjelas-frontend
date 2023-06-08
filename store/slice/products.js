import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_FAIL, PRODUCTS_SUCCESS } from "../saga/actions";
const initialState = {};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productLoading: (state, action) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      console.log(action);
      const { items, total, pages } = action.payload;

      state.loading = false;
      state.items = items;
      state.numOfProducts = total;
      state.pages = pages;
    },
    latestProductSuccess: (state, action) => {
      console.log(action);
      const { items } = action.payload;
      state.loading = false;
      state.latestItems = items;
    },
    productFail: (state, action) => {
      console.log(action);
      state.loading = false;
    },
  },
});

export const {
  productFail,
  productLoading,
  productSuccess,
  latestProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
