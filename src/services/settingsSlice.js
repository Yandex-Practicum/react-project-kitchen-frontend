import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inProgress: false,
  errors: null,
}

export const settingsSlice  = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    SETTINGS_SAVED: (state, action) => {
      state.inProgress = false
      errors = action.error ? action.payload.errors : null
    },
    SETTINGS_PAGE_UNLOADED: (state, action) => {
      return initialState
    },

    ASYNC_START: (state, action) => {
      state.inProgress = true
    }
  }
})

export default settingsSlice.reducer
export const {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START} = settingsSlice.actions