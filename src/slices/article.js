import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  article: {},
  comments: [],
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    ARTICLE_PAGE_LOADED: (state, action) => {
      state.article = action.payload[0].article;
      state.comments = action.payload[1].comments;
    },
    ARTICLE_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    ADD_COMMENT: (state, action) => {
      state.commentErrors = action.error ? action.payload.errors : null;
      state.comments = action.error ?
        null :
        (state.comments || []).concat([action.payload.comment])
    },
    DELETE_COMMENT: (state, action) => {
      const commentId = action.commentId;
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },
    // ARTICLE_FAVORITED: (state, action) => {
    //   state.articles = state.articles.map(article => {
    //     if (state.article.slug === action.payload.article.slug) {
    //       state.favorited = action.payload.article.favorited;
    //       state.favoritesCount = action.payload.article.favoritesCount;
    //     };
    //     return article;
    //   })
    // },
    // ARTICLE_UNFAVORITED: (state, action) => {
    //   state.articles = state.articles.map(article => {
    //     if (state.article.slug === action.payload.article.slug) {
    //       state.favorited = action.payload.article.favorited;
    //       state.favoritesCount = action.payload.article.favoritesCount;
    //     };
    //     return article;
    //   })
    // },
  }
})

export default articleSlice.reducer
export const {  ARTICLE_PAGE_LOADED,
                ARTICLE_PAGE_UNLOADED,
                ADD_COMMENT,
                DELETE_COMMENT } = articleSlice.actions