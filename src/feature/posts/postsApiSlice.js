import { rootApi } from "../../api/api";

const postsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page) => {
        return {
          url: "/posts",
          method: "GET",
          params: { page },
        };
      },
      providesTags: (result) =>
        result.success
          ? [...result.data.map(({ _id }) => ({ type: "Posts", id: _id }))]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPost: builder.query({
      query: (postId) => {
        return {
          url: `/posts/${postId}`,
          method: "GET",
        };
      },
      providesTags: (_result, _error, id) => [{ type: "Posts", id }],
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
        return {
          url: `/posts/${postId}/likes`,
          method: "POST",
        };
      },
      invalidatesTags: (_result, _error, id) => {
        return [{ type: "Posts", id: id }];
      },
    }),

    addComment: builder.mutation({
      query: ({ postId, content }) => {
        return {
          url: `/posts/${postId}/comments`,
          method: "POST",
          body: content,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useAddLikeMutation,
  useGetPostQuery,
  useAddCommentMutation,
} = postsApiSlice;
