import { createSlice } from "@reduxjs/toolkit";
import {
  getArticleThunk,
  updateArticleThunk,
  createArticleThunk,
} from "./thunks";

const initialState = {
  articleSlug: "",
  title: "",
  description: "",
  image: "",
  body: "",
  tagInput: "",
  tagList: [],
};

const setEditor = (state, action) => {
  if (action.payload?.article) {
    return { ...action.payload.article };
  }
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    clearEditor: (state, action) => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [getArticleThunk.fulfilled]: setEditor,
    [createArticleThunk.fulfilled]: setEditor,
    [updateArticleThunk.fulfilled]: setEditor,
  },
});

export default editorSlice.reducer;
export const { clearEditor } = editorSlice.actions;
