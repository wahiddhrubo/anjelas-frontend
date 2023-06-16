import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginLoading: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.emailSentSuccess = true;
    },

    logoutSuccess: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    onError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loadSuccess,
  loginLoading,
  loginSuccess,
  logoutSuccess,
  forgotPasswordSuccess,
  onError,
} = userSlice.actions;
export default userSlice.reducer;
