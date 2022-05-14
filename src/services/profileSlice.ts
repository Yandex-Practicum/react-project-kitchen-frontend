import { createSlice } from "@reduxjs/toolkit";
import { followUserThunk, getProfileThunk, unfollowUserThunk } from "./thunks";
import {TFollowingUser} from "./types";

export const initialState: TFollowingUser = {
  username: "",
  image: "",
  following: false,
  bio: "",
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profilePageWasUnloaded: (state) => {
      return initialState;
    },
  //   profilePageWasLoaded: (state, action) => {
  //     const { username, image, following } = action.payload[0].profile;
  //     state.username = username;
  //     state.image = image;
  //     state.following = following;
  //   },
  //   followUser: (state, action) => {
  //     const { username, image, following } = action.payload.profile;
  //     state.username = username;
  //     state.image = image;
  //     state.following = following;
  //   },
  //   unfollowUser: (state, action) => {
  //     const { username, image, following } = action.payload.profile;
  //     state.username = username;
  //     state.image = image;
  //     state.following = following;
  //   },
  },

  extraReducers: {
    [getProfileThunk.fulfilled]: (state, action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
    },

    [followUserThunk.pending] : (state) => {
      state.isLoading = true;
    },
    [followUserThunk.fulfilled] : (state, action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [followUserThunk.rejected] : (state) => {
      state.isLoading = false;
    },

    [unfollowUserThunk.pending] : (state) => {
      state.isLoading = true;
    },
    [unfollowUserThunk.fulfilled] : (state, action) => {
      state.following = action.payload.profile.following;
      state.username = action.payload.profile.username;
      state.image = action.payload.profile.image;
      state.isLoading = false;
    },
    [unfollowUserThunk.rejected] : (state) => {
      state.isLoading = false;
    },
  },
});

export default profileSlice.reducer;
export const {
  profilePageWasUnloaded,
  // profilePageWasLoaded,
  // followUser,
  // unfollowUser
} = profileSlice.actions;
