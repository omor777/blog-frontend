import { createSelector } from "@reduxjs/toolkit";

const getAuth = (state) => state.auth;

const getIsLoggedIn = createSelector([getAuth], (auth) => auth.isLoggedIn);

export { getIsLoggedIn };
