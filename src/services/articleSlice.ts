import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  getArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
  createArticleThunk,
} from "./thunks";
import {TArticle} from "./types";

interface IInitialState {
  article: TArticle | {},
  comments: Array<any>, // TODO: type
}

const initialState: IInitialState = {
  article: {},
  comments: [],
};

const setArticle = (state: IInitialState, action: PayloadAction<TArticle>) => {
  if (action.payload?.article) {
    state.article = action.payload.article;
  }
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
    [getArticleThunk.fulfilled]: setArticle,
    [updateArticleThunk.fulfilled]: setArticle,
    [createArticleThunk.fulfilled]: setArticle,
    [deleteArticleThunk.fulfilled]: (state) => {
      state.article = {};
    },
  },
});

export default articleSlice.reducer;
export const { clearArticle } = articleSlice.actions;
