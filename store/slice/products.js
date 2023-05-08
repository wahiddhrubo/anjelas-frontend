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
      const { items, meta, itemPerPage } = action.payload;
      const total = meta ? meta.total : 0;
      const pages = meta ? Math.ceil(meta[0] / itemPerPage) : 0;

      state.loading = false;
      state.items = items;
      state.numOfProducts = total;
      state.pages = pages;
    },
    productFail: (state, action) => {
      console.log(action);
      state.loading = false;
    },
  },
});

export const { productFail, productLoading, productSuccess } =
  productSlice.actions;
export default productSlice.reducer;
