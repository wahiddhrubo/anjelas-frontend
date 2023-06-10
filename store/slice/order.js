import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
  },
});

export const { updateOrders } = orderSlice.actions;
export default orderSlice.reducer;
