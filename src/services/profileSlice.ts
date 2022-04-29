import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TFollowingUser} from "./types";

interface IInitialState {
  inProgress: boolean,
  username: string,
  image: string,
  following: null | any, // TODO: уточнить тип. boolean?
  bio: string
}

type TArticles = {
  articles: Array<any>,
  articlesCount: number;
}

export const initialState: IInitialState =  {
  inProgress: false,
  username: '',
  image: '',
  following: null,
  bio: ''
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.inProgress = true
    },
    loadSuccess: (state, action: PayloadAction<[TFollowingUser, TArticles]>) => {
      const { username, image, following } = action.payload[0].profile
      state.username = username;
      state.image = image;
      state.following = following;
    },
    unload: (state) => {
      return initialState
    },
    followUser: (state, action: PayloadAction<TFollowingUser>) => {
      const { username, image, following } = action.payload.profile
      state.username = username;
      state.image = image;
      state.following = following;
    },
    unfollowUser: (state, action: PayloadAction<TFollowingUser>) => {
      const { username, image, following } = action.payload.profile
      state.username = username;
      state.image = image;
      state.following = following;
    }
  }
})

export default profileSlice.reducer
export const {
  isLoading,
  loadSuccess,
  unload,
  followUser,
  unfollowUser
} = profileSlice.actions
