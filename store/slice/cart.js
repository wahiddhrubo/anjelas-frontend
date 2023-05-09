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
    updateCart: (state, action) => {
      console.log(action);
      state.items = action.payload.cart.items;
    },
    addToCartNonUser: (state, action) => {
      const { id, variant, quantity } = action.payload;
      const match = state.items?.findIndex(
        (i) => i.id === id && i.variant === variant
      );
      if (match >= 0) {
        state.items[match].quantity =
          state.items[match].quantity + parseInt(quantity);
      } else {
        state.items = state.items
          ? [...state.items, action.payload]
          : [action.payload];
      }
    },
    updateCartNonUser: (state, action) => {
      const { id, quantity, variant } = action.payload;
      const match = state.items?.findIndex(
        (i) => i.id === id && i.variant === variant
      );
      if (quantity > 0) {
        state.items[match].quantity = parseInt(quantity);
      } else {
        state.items = state.items.filter((i) => i.id === id);
      }
    },
    removeFromCartNonUser: (state, action) => {
      const { id, variant } = action.payload;
      console.log(variant);
      state.items = state.items.filter((i) => {
        return i.id !== id && i.variant !== variant;
      });
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
  removeFromCartNonUser,
  updateCartNonUser,
  getPriceAndQuantity,
  updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
