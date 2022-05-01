import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  getArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
  createArticleThunk,
  createCommentThunk,
  deleteCommentThunk,
  getCommentsForArticleThunk,
} from "./thunks";
import {TArticle} from "./types";

interface IInitialState {
  article: TArticle | {},
  comments: Array<any>, // TODO: type
  commentErrors: any,
}

const initialState: IInitialState = {
  article: {},
  comments: [],
  commentErrors: null,
};

const setArticle = (state: IInitialState, action: PayloadAction<TArticle>) => {
  if (action.payload?.article) {
    state.article = action.payload.article;
  }
};

const setCommentsForArticle = (state: IInitialState, action: PayloadAction<any>) => {
  state.comments = action.payload.comments;
};

const addComment = (state: IInitialState, action: PayloadAction<any>) => {
  state.commentErrors = null,
  state.comments = (state.comments || []).concat([action.payload.comment])
};

const deleteComment = (state: IInitialState, action: PayloadAction<any>) => {
  state.comments = state.comments.filter(comment => comment.id !== action.payload.commentId)
}

const addCommentErrors = (state: IInitialState, action: PayloadAction<any>) => {
  state.commentErrors = action.payload.errors,
  state.comments = initialState.comments
}


export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearArticle: (state) => {
      state.article = {};
    },
  },

  extraReducers: {
    [getArticleThunk.fulfilled]: setArticle,
    [updateArticleThunk.fulfilled]: setArticle,
    [createArticleThunk.fulfilled]: setArticle,
    [deleteArticleThunk.fulfilled]: (state) => {
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
