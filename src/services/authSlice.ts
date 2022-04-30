import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";

interface IInitialState {
  inProgress: boolean,
  errors?: null | any, // TODO: выснить, какого типа ошибки. string или это объект/массив?
}

const initialState: IInitialState = {
  inProgress: false,
  // errors: null
};

const setInProgressTrue = (state: any, action: any) => {
  state.inProgress = true;
};

const setInProgressFalse = (state: any, action: any) => {
  state.inProgress = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.inProgress = false;
      // state.errors = action.payload.errors ? action.payload.errors : null
    },
    register: (state, action) => {
      state.inProgress = false;
      // state.errors = action.payload.errors ? action.payload.errors : null
    },
    pageWasUnloaded: (state) => initialState,
  },
  extraReducers: {
    [loginThunk.pending]: setInProgressTrue,
    [loginThunk.rejected]: setInProgressFalse,
    [loginThunk.fulfilled]: setInProgressFalse,
  },
});

export default authSlice.reducer;
//Раскомментировать со строками 25-31 или удалить вместе с ними.
// export const { ASYNC_START, REGISTER, REGISTER_PAGE_UNLOADED, UPDATE_FIELD_AUTH } = authSlice.actions
export const { login, register, pageWasUnloaded } = authSlice.actions;
    //   // if (action.subtype === LOGIN || action.subtype === REGISTER) {
    //   return {...state, inProgress: true};
    // }
    // // },

