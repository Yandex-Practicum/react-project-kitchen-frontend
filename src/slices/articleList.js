import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  currentArticle: {},
  articlesCount: 0,
  currentPage: 0,
  tab: null,
  tag: null,
  tags: [],
  pager: null,
}

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    SET_PAGE: (state, action) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.currentPage = action.page;
    },
    APPLY_TAG_FILTER: (state, action) => {
      state.pager = action.pager;
      state.articles  = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null
      state.tag = action.tag;
      state.currentPage = 0;
    },
    HOME_PAGE_LOADED: (state, action) => {
      state.pager = action.pager
      state.tags = action.payload[0].tags
      state.articles = action.payload[1].articles
      state.articlesCount = action.payload[1].articlesCount
      state.currentPage = 0
      state.tab = action.tab
    },
    HOME_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    CHANGE_TAB: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = action.tab;
      state.currentPage = 0;
      state.tag = null;
    },
    PROFILE_PAGE_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
    },
    PROFILE_FAVORITES_PAGE_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.currentPage = 0;
    },
    ARTICLE_FAVORITED: (state, action) => {
      state.articles = state.articles.map(article => {
        if (article.slug === action.payload.article.slug) {
          article.favorited = action.payload.article.favorited;
          article.favoritesCount = action.payload.article.favoritesCount;
        };
        return article;
      })
    },
    ARTICLE_UNFAVORITED: (state, action) => {
      state.articles = state.articles.map(article => {
        if (article.slug === action.payload.article.slug) {
          article.favorited = action.payload.article.favorited;
          article.favoritesCount = action.payload.article.favoritesCount;
        };
        return article;
      })
    },
    ARTICLE_PAGE_LOADED: (state, action) => {
      state.currentArticle = action.payload[0].article;
      state.articleComments = action.payload[1].comments;
    },
    ARTICLE_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    ADD_COMMENT: (state, action) => {
      state.articleCommentErrors = action.error ? action.payload.errors : null;
      state.articleComments = action.error ?
        null :
        (state.articleComments || []).concat([action.payload.comment])
    },
    DELETE_COMMENT: (state, action) => {
      const commentId = action.commentId;
      state.articleComments = state.articleComments.filter(comment => comment.id !== commentId);
    },
  },
})

export default articleListSlice.reducer
export const {  ARTICLE_FAVORITED,
                ARTICLE_UNFAVORITED,
                SET_PAGE,
                APPLY_TAG_FILTER,
                HOME_PAGE_LOADED,
                HOME_PAGE_UNLOADED,
                CHANGE_TAB,
                PROFILE_PAGE_LOADED,
                PROFILE_PAGE_UNLOADED,
                PROFILE_FAVORITES_PAGE_LOADED,
                PROFILE_FAVORITES_PAGE_UNLOADED,
                ARTICLE_PAGE_LOADED,
                ARTICLE_PAGE_UNLOADED,
                ADD_COMMENT,
                DELETE_COMMENT } = articleListSlice.actions