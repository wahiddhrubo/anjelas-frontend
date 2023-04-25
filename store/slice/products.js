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
      state.loading = false;
      state.items = action.payload.drinks;
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
