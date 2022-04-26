import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  inProgress: false,
  errors: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.inProgress = false,
        state.errors = action.error ? action.payload.errors : null
    },
    REGISTER: (state, action) => {
      state.inProgress = false,
        state.errors = action.error ? action.payload.errors : null

    },

    LOGIN_PAGE_UNLOADED: (state, action) => initialState,

    REGISTER_PAGE_UNLOADED: (state, action) => initialState,

    ASYNC_START: (state, action) => {
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return {...state, inProgress: true};
      }
    },

  }
})

export default authSlice.reducer
export const {ASYNC_START, UPDATE_FIELD_AUTH} = authSlice.actions
