import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentArticle: { comments: [], commentErrors: null },
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
};

export const articleSlice = createSlice({
  name: 'S_articles',
  initialState,
  reducers: {
    S_ARTICLE_PAGE_LOADED: (state, action) => {
      state.currentArticle = action.payload[0].article;
      state.currentArticle.comments = action.payload[1].comments;
    },
    S_ARTICLE_PAGE_UNLOADED: (state, action) => {
      return { initialState };
    },
    S_ADD_COMMENT: (state, action) => {
      state.currentArticle.commentErrors = action.error ? action.payload.errors : null;
      state.currentArticle.comments = action.error
        ? null
        : (state.currentArticle.comments || []).concat([action.payload.comment]);
    },
    S_DELETE_COMMENT: (state, action) => {
      const commentId = action.commentId;
      state.currentArticle.comments = state.currentArticle.comments.filter((comment) => comment.id !== commentId);
    },
    S_APPLY_TAG_FILTER: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = null;
      state.tag = action.tag;
    },
    S_HOME_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.tags = action.payload[0].tags;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
      state.tab = action.tab;
    },
    S_HOME_ARTICLES_UNLOADED: (state, action) => {
      return {};
    },
    S_CHANGE_TAB: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.tab = action.tab;
      state.tag = null;
    },
    S_PROFILE_ARTICLES_LOADED: (state, action) => {
      state.pager = action.pager;
      state.articles = action.payload[1].articles;
      state.articlesCount = action.payload[1].articlesCount;
    },
    S_PROFILE_ARTICLES_UNLOADED: (state, action) => {
      return {};
    },
    S_CHANGE_FAVORITES_STATUS: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.slug === action.payload.article.slug) {
          article.favorited = action.payload.article.favorited;
          article.favoritesCount = action.payload.article.favoritesCount;
        }
        return article;
      });
    },
    S_EDITOR_PAGE_LOADED: (state, action) => {
      const { slug, title, description, image, body, tagList } = action.payload.article;
      state.articleEditor.articleSlug = slug;
      state.articleEditor.title = title;
      state.articleEditor.description = description;
      state.articleEditor.image = image;
      state.articleEditor.body = body;
      state.articleEditor.tagInput = '';
      state.articleEditor.tagList = tagList;
    },
    S_EDITOR_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    S_ADD_TAG: (state, action) => {
      state.articleEditor.tagList = state.articleEditor.tagList.concat([state.articleEditor.tagInput]);
      state.articleEditor.tagInput = '';
    },
    S_REMOVE_TAG: (state, action) => {
      state.articleEditor.tagList = state.tagList.filter((tag) => tag !== action.tag);
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
} = articleSlice.actions;
