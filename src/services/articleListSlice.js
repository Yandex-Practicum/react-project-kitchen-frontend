import { createSlice } from "@reduxjs/toolkit";
import {
  getAllArticlesThunk,
  getFeedArticlesThunk,
  getTagsThunk,
  getArticlesByAuthorThunk,
  getFavoritedArticlesThunk,
  setArticleAsFavoriteThunk,
  deleteArticleAsFavoriteThunk,
} from "./thunks";

const initialState = {
  articles: [],
  currentArticle: {},
  articlesCount: 0,
  currentPage: 0,
  tab: null,
  tag: null,
  tags: [],
  pager: null,
};

const setFavoritedStatusOnArticle = (state, action) => {
  state.articles = state.articles.map((art) => {
    if (art.slug === action.payload.article.slug) {
      return action.payload.article;
    } else {
      return art;
    }
  });
};

export const articleListSlice = createSlice({
  name: "articleList",
  initialState,
  reducers: {},

  extraReducers: {
    [getFeedArticlesThunk.fulfilled]: (state, action) => {
      state.articles = action.payload.articles;
    },
    [getAllArticlesThunk.fulfilled]: (state, action) => {
      state.articles = action.payload.articles;
    },
    [getTagsThunk.fulfilled]: (state, action) => {
      state.tags = action.payload.tags;
    },
    [getArticlesByAuthorThunk.fulfilled]: (state, action) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    },
    [getFavoritedArticlesThunk.fulfilled]: (state, action) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    },
    [setArticleAsFavoriteThunk.fulfilled]: setFavoritedStatusOnArticle,
    [deleteArticleAsFavoriteThunk.fulfilled]: setFavoritedStatusOnArticle,
  },
});

export default articleListSlice.reducer;
