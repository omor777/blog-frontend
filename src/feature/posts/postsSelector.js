import { createSelector } from "@reduxjs/toolkit";

const getPostContents = (state) => state.posts;

const getSinglePostData = createSelector(getPostContents, (post) => {
  console.log(post);
  return {};
});

export { getPostContents, getSinglePostData };
