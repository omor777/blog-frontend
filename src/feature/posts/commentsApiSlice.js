import { rootApi } from "../../api/api";

const commentsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (result) =>
        result?.success
          ? [
              ...result.data.map(({ _id }) => ({ type: "Comment", id: _id })),
              { type: "Comment", id: "LIST" },
            ]
          : [{ type: "Comment", id: "LIST" }],
    }),

    addComment: builder.mutation({
      query: ({ postId, content }) => {
        return {
          url: `/posts/${postId}/comments`,
          method: "POST",
          body: { content },
        };
      },
      invalidatesTags: [{ type: "Comment", id: "LIST" }],
    }),
  }),
});

export const { useGetAllCommentsQuery, useAddCommentMutation } =
  commentsApiSlice;
