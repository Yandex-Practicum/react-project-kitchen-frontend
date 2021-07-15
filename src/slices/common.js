import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appName: 'Sum42',
  token: null,
  viewChangeCounter: 0,
  inProgress: null,
  errors: null,
};

export const commonSlice = createSlice({
  name: 'S_common',
  initialState,
  reducers: {
    S_APP_LOAD: (state, action) => {
      state.token = action.token || null;
      state.appLoaded = true;
      state.currentUser = action.payload ? action.payload.user : null;
    },
    S_LOGOUT: (state, action) => {
      state.token = null;
      state.currentUser = null;
    },
    S_ASYNC_START: (state, action) => {
      if (action.subtype === S_REGISTER) {
        state.inProgress = true;
      }
      if (action.subtype === S_ARTICLE_SUBMITTED) {
        state.inProgress = true;
      }
      state.inProgress = true;
    },
    S_LOGIN: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    S_REGISTER: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    S_ARTICLE_SUBMITTED: (state, action) => {
      state.redirectTo = `/article/${action.payload.article.slug}`;
      state.inProgress = null;
      state.errors = action.error ? action.payload.errors : null;
    },
    S_SETTINGS_SAVED: (state, action) => {
      state.currentUser = action.error ? null : action.payload.user;
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
    },
    S_DELETE_ARTICLE: (state, action) => {
      state.redirectTo = '/';
    },
  },
});

export default commonSlice.reducer;
export const {
  S_APP_LOAD,
  S_REDIRECT,
  S_LOGOUT,
  S_ARTICLE_SUBMITTED,
  S_SETTINGS_SAVED,
  S_LOGIN,
  S_REGISTER,
  S_DELETE_ARTICLE,
} = commonSlice.actions;
