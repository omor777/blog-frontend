import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
  previewImg: null,
  isPreview: false,
  singlePostData: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostTitle(state, action) {
      state.title = action.payload;
    },
    setPostContent(state, action) {
      state.content = action.payload;
    },
    setPreviewImg(state, action) {
      state.previewImg = action.payload;
    },
    removePreviewImg(state) {
      state.previewImg = null;
    },
    setPreview(state) {
      state.isPreview = true;
    },
    removePreview(state) {
      state.isPreview = false;
    },
    resetToInitialState(state) {
      state.title = "";
      state.content = "";
      state.previewImg = null;
      state.isPreview = false;
    },
    addSinglePostData(state, action) {
      state.singlePostData = action.payload;
    },
  },
});

export const {
  setPostTitle,
  setPostContent,
  setPreviewImg,
  removePreviewImg,
  setPreview,
  removePreview,
  resetToInitialState,
  addSinglePostData,
} = postsSlice.actions;

export default postsSlice.reducer;
