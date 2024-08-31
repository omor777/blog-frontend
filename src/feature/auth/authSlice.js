import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    logoutAction(state) {
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
