import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_FAIL, PRODUCTS_SUCCESS } from "../saga/actions";
const initialState = {};

const exampleCart = [
  {
    id: 1,
    item: { name: "example", featutredImage: "" },
    pricePerUnit: 1,
    quantity: 2,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartUser: (state, action) => {
      state.items = [...state.items, ...action.payload.items];
    },
    addToCartNonUser: (state, action) => {
      const match = state.items?.findIndex((i) => i.id === action.payload.id);
      if (match >= 0) {
        state.items[match].quantity =
          state.items[match].quantity + parseInt(action.payload.quantity);
      } else {
        state.items = state.items
          ? [...state.items, action.payload]
          : [action.payload];
      }
    },
    updateCartNonUser: (state, action) => {
      const { id, quantity } = action.payload;
      const match = state.items?.findIndex((i) => i.id === id);
      if (quantity > 0) {
        state.items[match].quantity = parseInt(quantity);
      } else {
        state.items = state.items.filter((i) => i.id === id);
      }
    },
    removeFromCartNonUser: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    getPriceAndQuantity: (state, action) => {
      state.quantity = state.items?.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      state.price = state.items?.reduce(
        (prev, curr) => prev + curr.pricePerUnit * curr.quantity,
        0
      );
    },
  },
});

export const {
  addToCartNonUser,
  addToCartUser,
  removeFromCartNonUser,
  updateCartNonUser,
  getPriceAndQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
