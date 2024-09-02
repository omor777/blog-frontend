import { rootApi } from "../../api/api";

const postsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (body) => {
        return {
          url: "/blog",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePostMutation } = postsApiSlice;
