import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inProgress: null,
  errors: null,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    SETTINGS_SAVED: (state, action) => {
      state.inProgress = false;
      state.errors = action.error ? action.payload.errors : null;
    },
    SETTINGS_PAGE_UNLOADED: (state, action) => {
      return {}
    },
    ASYNC_START: (state, action) => {
      if (action.subtype === ARTICLE_SUBMITTED) {
        state.inProgress = true;
      }
      state.inProgress = true;
    },
    ARTICLE_SUBMITTED: (state, action) => {
      state.inProgress = null;
      state.errors = action.error ? action.payload.errors : null;
    },
  }
})

export default settingsSlice.reducer
export const { SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, ASYNC_START, ARTICLE_SUBMITTED } = settingsSlice.actions