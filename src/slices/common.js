import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appName: 'Sum42',
  token: null,
  viewChangeCounter: 0,
  inProgress: null,
  errors: null,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    APP_LOAD: (state, action) => {
      state.token = action.token || null;
      state.appLoaded = true;
      state.currentUser = action.payload ? action.payload.user : null;
    },
    REDIRECT: (state, action) => {
      state.redirectTo = null;
    },
    LOGOUT: (state, action) => {
      state.redirectTo = '/';
      state.token = null;
      state.currentUser = null;
    },
    ASYNC_START: (state, action) => {
      if (action.subtype === REGISTER) {
        state.inProgress = true;
      }
      if (action.subtype === ARTICLE_SUBMITTED) {
        state.inProgress = true;
      }
      state.inProgress = true;
    },
    LOGIN: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
    },
    REGISTER: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
    },
    // REGISTER_PAGE_UNLOADED: (state, action) => {
    //   return {};
    // },
    // LOGIN_PAGE_UNLOADED: (state, action) => {
    //   return {};
    // },
    UPDATE_FIELD_AUTH: (state, action) => {
      return { ...state, [action.key]: action.value }
    },
    ARTICLE_SUBMITTED: (state, action) => {
      state.redirectTo = `/article/${action.payload.article.slug}`;
    },
    SETTINGS_SAVED: (state, action) => {
      state.redirectTo = action.error ? null : '/';
      state.currentUser = action.error ? null : action.payload.user;
    },
    LOGIN: (state, action) => {
      state.redirectTo = action.error ? null : '/';
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    REGISTER: (state, action) => {
      state.redirectTo = action.error ? null : '/';
      state.token = action.error ? null : action.payload.user.token;
      state.currentUser = action.error ? null : action.payload.user;
    },
    DELETE_ARTICLE: (state, action) => {
      state.redirectTo = '/';
    },
    SETTINGS_SAVED: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
    },
    // SETTINGS_PAGE_UNLOADED: (state, action) => {
    //   return {}
    // },
    ARTICLE_SUBMITTED: (state, action) => {
      state.inProgress = null;
      state.errors = action.error ? action.payload.errors : null;
    },
    ARTICLE_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    EDITOR_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    HOME_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    PROFILE_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    PROFILE_FAVORITES_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    SETTINGS_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    LOGIN_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
    REGISTER_PAGE_UNLOADED: (state, action) => {
      state.viewChangeCounter = state.viewChangeCounter + 1 
    },
  }
})

export default commonSlice.reducer
export const {  APP_LOAD,
                REDIRECT,
                LOGOUT,
                ARTICLE_SUBMITTED,
                SETTINGS_SAVED,
                LOGIN,
                REGISTER,
                DELETE_ARTICLE,
                ARTICLE_PAGE_UNLOADED,
                EDITOR_PAGE_UNLOADED,
                HOME_PAGE_UNLOADED,
                PROFILE_PAGE_UNLOADED,
                PROFILE_FAVORITES_PAGE_UNLOADED,
                SETTINGS_PAGE_UNLOADED,
                LOGIN_PAGE_UNLOADED,
                REGISTER_PAGE_UNLOADED} = commonSlice.actions