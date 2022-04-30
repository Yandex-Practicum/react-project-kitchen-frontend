import { createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  tags: Array<String>;
  // tagsRequestInProgress: boolean;
}

const initialState: IinitialState = {
  tags: [],
  // tagsRequestInProgress: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    HOME_PAGE_LOADED: (state, action) => {
      if (action.payload[0] === null) {
        return initialState;
      }
      state.tags = action.payload[0].tags;
    },
    HOME_PAGE_UNLOADED: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    // [getTagsThunk.pending]: (state: any, action: any) => {
    //   state.tagsRequestInProgress = true;
    // },
    // [getTagsThunk.rejected]: (state: any, action: any) => {
    //   state.tagsRequestInProgress = false;
    // },
    [getTagsThunk.fulfilled]: (state: any, action: any) => {
      state.tags = action.payload.tags;
      // state.tagsRequestInProgress = false;
    },
  },
});

export default homeSlice.reducer;
export const { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } = homeSlice.actions;
