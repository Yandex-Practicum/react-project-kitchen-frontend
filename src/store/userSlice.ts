import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';
import { TProfile } from '../types/types';

type TUserState = {
  username: string | null,
  email: string | null,
  bio?: string | null,
  image?: string | null,
  userobject: TProfile | null

};

const initialState: TUserState = {
  username: null,
  email: null,
  bio: null,
  image: null,
  userobject: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state: TUserState,
      action: PayloadAction<TUser>,
    ) => ({ ...state, ...action.payload }),
    clearUser: (state: TUserState) => ({
      ...state, ...initialState,
    }),
    setCurrentUser(state, action) {
      state.userobject = action.payload
  
    }
  }
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser, setCurrentUser} = userSlice.actions;
export default userReducer;
