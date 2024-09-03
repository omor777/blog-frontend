import { rootApi } from "../../api/api";

const postsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result) =>
        result.success
          ? [...result.data.map(({ _id }) => ({ type: "Posts", id: _id }))]
          : [{ type: "Posts", id: "LIST" }],
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
    addLike: builder.mutation({
      query: (postId) => {
        console.log(postId);
        return {
          url: `/posts/${postId}/likes`,
          method: "POST",
        };
      },
      invalidatesTags: (_result, _error, id) => {
        console.log(arg, "Arg from invalidate tags");
        return [{ type: "Posts", id: id }];
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePostMutation, useGetPostsQuery, useAddLikeMutation } =
  postsApiSlice;
