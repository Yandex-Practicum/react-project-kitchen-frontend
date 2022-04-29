import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  article: any, // TODO: типы!!
  comments: Array<any>,
  commentErrors: null | any,
}

const initialState: IInitialState = {
  article: {},
  comments: [],
  commentErrors: null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articlePageWasLoaded: (state, action) => {
      state.article = action.payload[0].article;
      state.comments = action.payload[1].comments;
    },
    articlePageWasUnloaded: (state) => {
      return initialState;
    },
    addComment: (state, action) => {
      // state.commentErrors = action.error ? action.payload.errors : null;
      // state.comments = action.error
      // ? null
      // : (state.comments || []).concat([action.payload.comment])
      state.commentErrors = action.payload.errors;
      state.comments = (state.comments || []).concat([action.payload.comment])
    },
    deleteComment: (state, action) => {
      // const commentId = action.commentId;
      const commentId = action.payload.commentId;
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },
  }
})

export default articleSlice.reducer
// export const {  ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED, ADD_COMMENT, DELETE_COMMENT } = articleSlice.actions
export const {
  articlePageWasLoaded,
  articlePageWasUnloaded,
  addComment,
  deleteComment
} = articleSlice.actions
