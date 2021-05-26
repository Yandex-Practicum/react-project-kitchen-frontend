import { createSlice } from '@reduxjs/toolkit';

const initialState = {
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AUTHORIZATION: (state, action) => {
      // state.inProgress = false,
      // state.errors = action.error ? action.payload.errors : null;
    },
    PAGE_UNLOADED: (state, action) => {
      // state = initialState;
    },
    ASYNC_START: (state, action) => {
      // if (action.subtype === AUTHORIZATION) {
      //   state.inProgress = true;
      // }
    },
    UPDATE_FIELD_AUTH: (state, action) => {
      // state, [action.key]: action.value }
    }
  }
})

export default authSlice.reducer
export const {  AUTHORIZATION,
                PAGE_UNLOADED,
                ASYNC_START,
                UPDATE_FIELD_AUTH } = authSlice.actions

  // продумать работу с другими слайсами
  // LOGIN,
  // REGISTER,
  // LOGIN_PAGE_UNLOADED,
  // REGISTER_PAGE_UNLOADED,