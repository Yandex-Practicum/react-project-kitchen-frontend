import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appName: 'Sum42',
  appLoaded: false,
  token: null,
  viewChangeCounter: 0,
  inProgress: null,
  errors: null,
  isDarkTheme: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    APP_LOAD: (state, action) => {
      state.token = action.token || null;
      state.appLoaded = true;
      state.currentUser = action.payload ? action.payload.res.user : null;
    },
    LOGOUT: (state, action) => {
      state.token = null;
      state.currentUser = null;
    },
    ASYNC_START: (state, action) => {
      if (action.subtype === AUTHORIZATION) {
        state.inProgress = true;
      }
      state.inProgress = true;
    },
    AUTHORIZATION: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
      state.token = action.error ? null : action.payload.res.user.token;
      state.currentUser = action.error ? null : action.payload.res.user;
    },
    SETTINGS_SAVED: (state, action) => {
      state.currentUser = action.error ? null : action.payload.res.user;
      state.inProgress = false;
      state.errors = action.error ? action.payload.res.errors : null;
    },
    CHANGE_THEME: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default commonSlice.reducer;
export const { APP_LOAD, REDIRECT, LOGOUT, SETTINGS_SAVED, AUTHORIZATION, CHANGE_THEME } = commonSlice.actions;
