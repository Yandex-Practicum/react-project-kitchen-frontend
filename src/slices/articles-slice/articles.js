import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentArticle: { slug: '', body: '', author: { image: '' }, comments: [], commentErrors: null },
  articleEditor: {
    articleSlug: '',
    title: '',
    description: '',
    image: '',
    body: '',
    tagInput: '',
    tagList: [],
  },
  articles: [],
  articlesCount: 0,
  tags: [],
  tag: null,
  tab: null,
  pager: null,
  inProgress: true,
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    ARTICLE_PAGE_LOADED: (state, action) => {
      state.currentArticle = action.payload.res[0].article;
      state.currentArticle.comments = action.payload.res[1].comments;
    },
    ARTICLE_PAGE_UNLOADED: (state, action) => {
      return { initialState };
    },
    ADD_COMMENT: (state, action) => {
      state.currentArticle.commentErrors = action.error ? action.payload.res.errors : null;
      state.currentArticle.comments = action.error
        ? null
        : (state.currentArticle.comments || []).concat([action.payload.res.comment]);
    },
    DELETE_COMMENT: (state, action) => {
      const commentId = action.commentId;
      state.currentArticle.comments = state.currentArticle.comments.filter((comment) => comment.id !== commentId);
    },
    APPLY_TAG_FILTER: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res.articles;
      state.articlesCount = action.payload.res.articlesCount;
      state.tab = null;
      state.tag = action.tag;
    },
    HOME_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.tags = action.payload.res[0].tags;
      state.articles = action.payload.res[1].articles;
      state.articlesCount = action.payload.res[1].articlesCount;
      state.tab = action.tab;
      state.deleted = false;
    },
    HOME_ARTICLES_UNLOADED: (state, action) => {
      state.articleEditor = { inProgress: true };
    },
    CHANGE_TAB: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res.articles;
      state.articlesCount = action.payload.res.articlesCount;
      state.tab = action.tab;
      state.tag = null;
    },
    PROFILE_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res[1].articles;
      state.articlesCount = action.payload.res[1].articlesCount;
    },
    PROFILE_ARTICLES_UNLOADED: (state, action) => {
      return {};
    },
    CHANGE_FAVORITES_STATUS: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.slug === action.payload.res.article.slug) {
          article.favorited = action.payload.res.article.favorited;
          article.favoritesCount = action.payload.res.article.favoritesCount;
        }
        return article;
      });
    },
    EDITOR_PAGE_LOADED: (state, action) => {
      if (action.payload) {
        state.inProgress = false;
        state.editArticle = action.payload.res;
      }
      state.inProgress = false;
    },
    EDITOR_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    ADD_TAG: (state, action) => {
      state.articleEditor.title = action.payload.res.title;
      state.articleEditor.description = action.payload.res.description;
      state.articleEditor.image = action.payload.res.image;
      state.articleEditor.body = action.payload.res.body;
      state.articleEditor.tagInput = '';
      state.articleEditor.tagList = state.articleEditor.tagList.concat([action.payload.res.tagInput]);
      state.articleEditor.tagInput = '';
    },
    REMOVE_TAG: (state, action) => {
      state.articleEditor.tagList = state.tagList.filter((tag) => tag !== action.tag);
    },
    ARTICLE_SUBMITTED: (state, action) => {
      state.editArticle = action.payload.res.article;
      state.errors = action.error ? action.payload.res.errors : null;
    },
    DELETE_ARTICLE: (state, action) => {
      state.redirectTo = '/';
      state.deleted = true;
    },
  },
});

export default articleSlice.reducer;
export const {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_FAVORITES_STATUS,
  APPLY_TAG_FILTER,
  HOME_ARTICLES_LOADED,
  HOME_ARTICLES_UNLOADED,
  CHANGE_TAB,
  PROFILE_ARTICLES_LOADED,
  PROFILE_ARTICLES_UNLOADED,
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ADD_TAG,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  DELETE_ARTICLE,
} = articleSlice.actions;
