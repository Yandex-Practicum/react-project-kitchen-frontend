import { createSlice } from "@reduxjs/toolkit";
import { getArticle } from "../api";
import {
  getArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
  createArticleThunk,
} from "./thunks";

const initialState = {
  article: {},
  comments: [],
  commentErrors: null,
};

const setArticle = (state, action) => {
  if (action.payload?.article) {
    state.article = action.payload.article;
  }
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearArticle: (state, action) => {
      state.article = {};
    },
  },

  extraReducers: {
    [getArticleThunk.fulfilled]: setArticle,
    [updateArticleThunk.fulfilled]: setArticle,
    [createArticleThunk.fulfilled]: setArticle,
    [deleteArticleThunk.fulfilled]: (state, action) => {
      state.article = {};
    },
  },
});

export default articleSlice.reducer;
export const { clearArticle } = articleSlice.actions;
