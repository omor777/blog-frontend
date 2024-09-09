import { rootApi } from "../../api/api";

const userApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/users/profile`,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApiSlice;
