import { createSlice,  PayloadAction } from '@reduxjs/toolkit'
import { updateUserThunk } from "../services/thunks";


interface IInitialState {
  inProgress: boolean
  // errors: any;
  // tagsRequestInProgress: boolean;
}

const initialState: IInitialState = {
  inProgress: false,
  // errors: null,
}

export const settingsSlice  = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    SETTINGS_SAVED: (state: IInitialState, action: PayloadAction<any>) => {
      state.inProgress = false;
      // state.errors = action.payload.errors ? action.payload.errors : null
    },
    SETTINGS_PAGE_UNLOADED: (state, action) => {
      return initialState
    },

  },
  extraReducers: {
    [updateUserThunk.pending]: (state) => {
      state.inProgress = true
    },

    [updateUserThunk.rejected]: (state) => {
      state.inProgress = false
    },

    [updateUserThunk.fulfilled]: (state) => {
      state.inProgress = false
    }
  },
  

})



export default settingsSlice.reducer
export const {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED} = settingsSlice.actions