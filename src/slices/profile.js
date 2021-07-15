import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  image: '',
  following: null,
};

export const profileSlice = createSlice({
  name: 'S_profile',
  initialState,
  reducers: {
    S_PROFILE_PAGE_UNLOADED: (state, action) => {
      return {};
    },
    S_PROFILE_PAGE_LOADED: (state, action) => {
      const { username, image, following } = action.payload[0].profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
    S_FOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
    S_UNFOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
  },
});

export default profileSlice.reducer;
export const { S_PROFILE_PAGE_LOADED, S_PROFILE_PAGE_UNLOADED, S_FOLLOW_USER, S_UNFOLLOW_USER } = profileSlice.actions;
