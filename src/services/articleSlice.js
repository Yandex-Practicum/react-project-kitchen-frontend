import { createSlice } from "@reduxjs/toolkit";
import { getArticle } from "../api";
import {
  getArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
  createArticleThunk,
  createCommentThunk,
  deleteCommentThunk,
  getCommentsForArticleThunk,
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

const setCommentsForArticle = (state, action) => {
  state.comments = action.payload.comments;
};

const addComment = (state, action) => {
  state.commentErrors = null,
  state.comments = (state.comments || []).concat([action.payload.comment])
};

const deleteComment = (state, action) => {
  state.comments = state.comments.filter(comment => comment.id !== action.payload.commentId)
}

const addCommentErrors = (state, action) => {
  state.commentErrors = action.payload.errors,
  state.comments = null
}

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
    [createCommentThunk.fulfilled]: addComment,
    [createCommentThunk.rejected]: addCommentErrors,
    [deleteCommentThunk.fulfilled]: deleteComment,
    [getCommentsForArticleThunk.fulfilled]: setCommentsForArticle,
  },
});

export default articleSlice.reducer;
export const { clearArticle } = articleSlice.actions;
