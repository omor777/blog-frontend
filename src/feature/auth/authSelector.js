import { createSelector } from "@reduxjs/toolkit";

const getAuth = (state) => state.auth;

const getIsLoggedIn = createSelector([getAuth], (auth) => auth.isLoggedIn);

const getUserInfo = createSelector([getAuth], (auth) => auth.user);

export { getIsLoggedIn, getUserInfo };
