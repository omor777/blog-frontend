import { rootApi } from "../../api/api";

const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: (body) => {
        return {
          url: "/users/register",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreateNewUserMutation } = authApi;
