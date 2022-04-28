import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk } from "./thunks";

export const initialState = {
  username: "",
  image: "",
  following: null,
  bio: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    PROFILE_PAGE_UNLOADED: (state, action) => {
      return initialState;
    },

    PROFILE_PAGE_LOADED: (state, action) => {
      const { username, image, following } = action.payload[0].profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
    FOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
    UNFOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
  },

  extraReducers: {
    [getProfileThunk.fulfilled]: (state, action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
    },
  },
});

export default profileSlice.reducer;
export const {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  FOLLOW_USER,
  UNFOLLOW_USER,
} = profileSlice.actions;
