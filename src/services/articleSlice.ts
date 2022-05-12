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
  inProgress: boolean
}

const initialState: IInitialState = {
  article: {},
  comments: [],
  commentErrors: null,
  inProgress: false
};

const setArticle = (state: IInitialState, action: PayloadAction<TArticle>) => {
  if (action.payload?.article) {
    state.article = action.payload.article;
  }
  state.inProgress = false;
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

const setInProgressTrue = (state: IInitialState) => {
  state.inProgress = true;
};

const setInProgressFalse = (state: IInitialState) => {
  state.inProgress = false;
};


export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearArticle: (state) => {
      state.article = {};
    },
  },

  extraReducers: {
    [createArticleThunk.pending]: setInProgressTrue,
    [createArticleThunk.fulfilled]: setArticle,
    [createArticleThunk.rejected]: setInProgressFalse,

    [updateArticleThunk.pending]: setInProgressTrue,
    [updateArticleThunk.fulfilled]: setArticle,
    [updateArticleThunk.rejected]: setInProgressFalse,

    [getArticleThunk.fulfilled]: setArticle,
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
