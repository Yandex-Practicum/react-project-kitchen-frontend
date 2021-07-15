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
    S_ARTICLE_PAGE_LOADED: (state, action) => {
      state.currentArticle = action.payload.res[0].article;
      state.currentArticle.comments = action.payload.res[1].comments;
    },
    S_ARTICLE_PAGE_UNLOADED: (state, action) => {
      return { initialState };
    },
    S_ADD_COMMENT: (state, action) => {
      state.currentArticle.commentErrors = action.error ? action.payload.res.errors : null;
      state.currentArticle.comments = action.error
        ? null
        : (state.currentArticle.comments || []).concat([action.payload.res.comment]);
    },
    S_DELETE_COMMENT: (state, action) => {
      const commentId = action.commentId;
      state.currentArticle.comments = state.currentArticle.comments.filter((comment) => comment.id !== commentId);
    },
    S_APPLY_TAG_FILTER: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res.articles;
      state.articlesCount = action.payload.res.articlesCount;
      state.tab = null;
      state.tag = action.tag;
    },
    S_HOME_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.tags = action.payload.res[0].tags;
      state.articles = action.payload.res[1].articles;
      state.articlesCount = action.payload.res[1].articlesCount;
      state.tab = action.tab;
      state.deleted = false;
    },
    S_HOME_ARTICLES_UNLOADED: (state, action) => {
      state.articleEditor = { inProgress: true };
    },
    S_CHANGE_TAB: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res.articles;
      state.articlesCount = action.payload.res.articlesCount;
      state.tab = action.tab;
      state.tag = null;
    },
    S_PROFILE_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.res[1].articles;
      state.articlesCount = action.payload.res[1].articlesCount;
    },
    S_PROFILE_ARTICLES_UNLOADED: (state, action) => {
      return {};
    },
    S_CHANGE_FAVORITES_STATUS: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.slug === action.payload.res.article.slug) {
          article.favorited = action.payload.res.article.favorited;
          article.favoritesCount = action.payload.res.article.favoritesCount;
        }
        return article;
      });
    },
    S_EDITOR_PAGE_LOADED: (state, action) => {
      if (action.payload) {
        // const { slug, title, description, image, body, tagList } = action.payload.res.article;
        // state.articleEditor.articleSlug = slug;
        // state.articleEditor.title = title;
        // state.articleEditor.description = description;
        // state.articleEditor.image = image;
        // state.articleEditor.body = body;
        // state.articleEditor.tagInput = '';
        // state.articleEditor.tagList = tagList;
        state.inProgress = false;
        state.editArticle = action.payload.res;
        // state.articleEditor.inProgress = false;
      }
      state.inProgress = false;
    },
    S_EDITOR_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    S_ADD_TAG: (state, action) => {
      state.articleEditor.title = action.payload.res.title;
      state.articleEditor.description = action.payload.res.description;
      state.articleEditor.image = action.payload.res.image;
      state.articleEditor.body = action.payload.res.body;
      state.articleEditor.tagInput = '';
      state.articleEditor.tagList = state.articleEditor.tagList.concat([action.payload.res.tagInput]);
      state.articleEditor.tagInput = '';
    },
    S_REMOVE_TAG: (state, action) => {
      state.articleEditor.tagList = state.tagList.filter((tag) => tag !== action.tag);
    },
    S_ARTICLE_SUBMITTED: (state, action) => {
      state.editArticle = action.payload.res.article;

      // state.redirectTo = `/article/${action.payload.res.article.slug}`;
      // state.articleEditor.inProgress = false;
      state.errors = action.error ? action.payload.res.errors : null;
    },
    S_DELETE_ARTICLE: (state, action) => {
      state.redirectTo = '/';
      state.deleted = true;
    },
  },
});

export default articleSlice.reducer;
export const {
  S_ARTICLE_PAGE_LOADED,
  S_ARTICLE_PAGE_UNLOADED,
  S_ADD_COMMENT,
  S_DELETE_COMMENT,
  S_CHANGE_FAVORITES_STATUS,
  S_APPLY_TAG_FILTER,
  S_HOME_ARTICLES_LOADED,
  S_HOME_ARTICLES_UNLOADED,
  S_CHANGE_TAB,
  S_PROFILE_ARTICLES_LOADED,
  S_PROFILE_ARTICLES_UNLOADED,
  S_EDITOR_PAGE_LOADED,
  S_EDITOR_PAGE_UNLOADED,
  S_ADD_TAG,
  S_REMOVE_TAG,
  S_ARTICLE_SUBMITTED,
  S_DELETE_ARTICLE,
} = articleSlice.actions;
