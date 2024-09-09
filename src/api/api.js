import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rootApi = createApi({
  reducerPath: "api",
  tagTypes: ["Posts", "Comment"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
