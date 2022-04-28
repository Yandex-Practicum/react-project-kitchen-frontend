import { createSlice } from '@reduxjs/toolkit';
import { TProfile } from '../types/types';

type TInitialState = {
  username: string | null,
  email: string | null,
  bio: string | null,
  image: string | null
 
};

const initialState:TInitialState = {
  username: null,
  email: null,
  bio: null,
  image: null,

};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const {
        username, email, bio, image,
      } = action.payload;
      state.username = username;
      state.email = email;
      state.bio = bio;
      state.image = image;
    },
    logoutUser(state) {
      state.username = null;
      state.email = null;
      state.bio = null;
      state.image = null;
    }
   
    
  },
});

export const profileReducer = profileSlice.reducer;
export const { loginSuccess, logoutUser } = profileSlice.actions;
