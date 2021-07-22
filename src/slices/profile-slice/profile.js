import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  image: '',
  following: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    PROFILE_PAGE_LOADED: (state, action) => {
      const { username, image, following, gh, cv, createdAt } = action.payload.res[0].profile;
      state.username = username;
      state.image = image;
      state.following = following;
      state.gh = gh;
      state.cv = cv;
      state.createdAt = createdAt;
    },
    FOLLOW_USER: (state, action) => {
      const { username, image, following } = action.payload.res.profile;
      state.username = username;
      state.image = image;
      state.following = following;
    },
  },
});

export default profileSlice.reducer;
export const { PROFILE_PAGE_LOADED, FOLLOW_USER } = profileSlice.actions;
