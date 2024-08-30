import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutAction(state) {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
