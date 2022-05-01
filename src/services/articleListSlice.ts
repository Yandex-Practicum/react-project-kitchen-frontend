import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  getAllArticlesThunk,
  getFeedArticlesThunk,
  getTagsThunk,
  getArticlesByAuthorThunk,
  getFavoritedArticlesThunk,
  setArticleAsFavoriteThunk,
  deleteArticleAsFavoriteThunk,
} from "./thunks";
import {TArticle, TArticleProperties} from "./types";

interface IInitialState {
  articles: Array<TArticleProperties>, // TODO: уточнить типы
  currentArticle: TArticleProperties | {},
  articlesCount: number,
  currentPage: 0,
  tab: null | string,
  tag: null | string,
  tags: Array<string>,
  pager: null | any,
}

const initialState: IInitialState = {
  articles: [],
  currentArticle: {},
  articlesCount: 0,
  currentPage: 0,
  tab: null,
  tag: null,
  tags: [],
  pager: null,
};

const setFavoritedStatusOnArticle = (state: IInitialState, action: PayloadAction<TArticle>) => { //TODO: уточнить тип статьи
  state.articles = state.articles.map((art) => {
    if (art.slug === action.payload.article.slug) { // TODO: тут точно art.slug?
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
    [getFeedArticlesThunk.fulfilled]: (state, action: PayloadAction<IInitialState>) => {
      state.articles = action.payload.articles;
    },
    [getAllArticlesThunk.fulfilled]: (state, action: PayloadAction<IInitialState>) => {
      state.articles = action.payload.articles;
    },
    [getTagsThunk.fulfilled]: (state, action: PayloadAction<IInitialState>) => {
      state.tags = action.payload.tags;
    },
    [getArticlesByAuthorThunk.fulfilled]: (state, action: PayloadAction<IInitialState>) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    },
    [getFavoritedArticlesThunk.fulfilled]: (state, action: PayloadAction<IInitialState>) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    },
    [setArticleAsFavoriteThunk.fulfilled]: setFavoritedStatusOnArticle,
    [deleteArticleAsFavoriteThunk.fulfilled]: setFavoritedStatusOnArticle,
  },
});

export default articleListSlice.reducer;
