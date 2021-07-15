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
    S_APP_LOAD: (state, action) => {
      state.token = action.token || null;
      state.appLoaded = true;
      state.currentUser = action.payload ? action.payload.res.user : null;
    },
    S_LOGOUT: (state, action) => {
      state.token = null;
      state.currentUser = null;
    },
    S_ASYNC_START: (state, action) => {
      if (action.subtype === S_AUTHORIZATION) {
        state.inProgress = true;
      }
      state.inProgress = true;
    },
    S_AUTHORIZATION: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
      state.token = action.error ? null : action.payload.res.user.token;
      state.currentUser = action.error ? null : action.payload.res.user;
    },
    S_SETTINGS_SAVED: (state, action) => {
      state.currentUser = action.error ? null : action.payload.res.user;
      state.inProgress = false;
      state.errors = action.error ? action.payload.res.errors : null;
    },
    S_CHANGE_THEME: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default commonSlice.reducer;
export const { S_APP_LOAD, S_REDIRECT, S_LOGOUT, S_SETTINGS_SAVED, S_AUTHORIZATION, S_CHANGE_THEME } =
  commonSlice.actions;
