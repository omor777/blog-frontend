import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  loading: "idle",
  error: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default authSlice.reducer;
