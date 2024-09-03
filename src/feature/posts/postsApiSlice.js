import { rootApi } from "../../api/api";

const postsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    createPost: builder.mutation({
      query: (body) => {
        return {
          url: "/posts",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePostMutation, useGetPostsQuery } = postsApiSlice;
