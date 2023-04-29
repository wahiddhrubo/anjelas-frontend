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
      console.log(action);
      state.loading = false;
      state.isAuthenticated = true;
    },
    loadSuccess: (state, action) => {
      console.log(action);
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    forgotPasswordSuccess: (state, action) => {
      console.log(action);
      state.loading = false;
      state.emailSentSuccess = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = null;
    },
  },
});

export const {
  loginFail,
  loadSuccess,
  loginLoading,
  loginSuccess,
  logoutSuccess,
  forgotPasswordSuccess,
} = userSlice.actions;
export default userSlice.reducer;
