import {createSlice} from "@reduxjs/toolkit";
import {number} from "prop-types";

interface IInitialState {
  articles: Array<any>, // TODO: уточнить типы
  currentArticle: any,
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

export const articleListSlice = createSlice({
  name: "articleList",
  initialState,
  reducers: {
    articleFavourited: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.slug === action.payload.article.slug) {
          article.favorited = action.payload.article.favorited;
          article.favoritesCount = action.payload.article.favoritesCount;
        }
        return article;
      });
    },
    setPage: (state, action) => {
      // state.pager = action.pager; // приходит не из payload, а из мидлвара. Удалить, когда будет нормальный мидлвар
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null;
      // state.tag = action.tag;
      state.currentPage = 0;
    },
    applyTagFilter: (state, action) => {
      // state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null;
      // state.tag = action.tag;
      state.currentPage = 0;
    },
    homeArticleLoaded: (state, action) => {
      // state.pager = action.pager;
      state.tags = action.payload[0].tags;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
      // state.tab = action.tab;
    },
    changeTab: (state, action) => {
      // state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      // state.tab = action.tab;
      state.currentPage = 0;
      state.tag = null;
    },
    profileArticlePageWasLoaded: (state, action) => {
      // state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
    },
    // PROFILE_FAVORITES_ARTICLE_LOADED: (state, action) => {
    //   // state.pager = action.pager;
    //   state.articles = action.payload[1].articles;
    //   state.articlesCount = action.payload[1].articlesCount;
    //   state.currentPage = 0;
    // },
    articlePageWasUnloaded: (state) => {
      return initialState;
    },
    // PROFILE_ARTICLE_UNLOADED: (state, action) => {
    //   return {};
    // },
    // PROFILE_FAVORITES_ARTICLE_UNLOADED: (state, action) => {
    //   return {};
    // },
  },
});

export default articleListSlice.reducer;
export const {
  articleFavourited,
  setPage,
  applyTagFilter,
  homeArticleLoaded,
  changeTab,
  profileArticlePageWasLoaded,
  articlePageWasUnloaded
} = articleListSlice.actions;
