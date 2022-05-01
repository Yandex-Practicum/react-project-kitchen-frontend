import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getTagsThunk} from "./thunks";

interface IInitialState {
  tags: Array<string>;
  // tagsRequestInProgress: boolean;
}

const initialState: IInitialState = {
  tags: [],
  // tagsRequestInProgress: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // HOME_PAGE_LOADED: (state, action) => {
    //   if (action.payload[0] === null) {
    //     return initialState;
    //   }
    //   state.tags = action.payload[0].tags;
    // },
    homePageWasUnloaded: (state) => {
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
    [getTagsThunk.fulfilled]: (state: any, action: PayloadAction<IInitialState>) => {
      state.tags = action.payload.tags;
      // state.tagsRequestInProgress = false;
    },
  },
});

export default homeSlice.reducer;
export const { homePageWasUnloaded } = homeSlice.actions;
