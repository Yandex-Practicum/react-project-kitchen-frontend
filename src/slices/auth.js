import { createSlice } from '@reduxjs/toolkit';

const initialState = {
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    REGISTER_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    LOGIN_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    UPDATE_FIELD_AUTH: (state, action) => {
      [action.key] = action.value;
    }
  },
  extraReducers: {
    ASYNC_START: (state, action) => {
      if (action.subtype === AUTHORIZATION) {
        state.settings.inProgress = true;
      }
    },
    LOGIN: (state, action) => {
      state.settings.inProgress = false;
      state.settings.errors = action.error ? action.payload.errors : null;
    },
    REGISTER: (state, action) => {
      state.settings.inProgress = false;
      state.settings.errors = action.error ? action.payload.errors : null;
    }
  }
})

export default authSlice.reducer
export const {  LOGIN,
                REGISTER,
                REGISTER_PAGE_UNLOADED,
                LOGIN_PAGE_UNLOADED,
                ASYNC_START,
                UPDATE_FIELD_AUTH } = authSlice.actions