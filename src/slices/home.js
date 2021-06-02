import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    HOME_PAGE_LOADED: (state, action) => {
      if (action.payload[0] === null) {
        return {}
      }
      state.tags = action.payload[0].tags;
    },
    HOME_PAGE_UNLOADED: (state, action) => {
      return {};
    },
  }
})

export default homeSlice.reducer
export const { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } = homeSlice.actions