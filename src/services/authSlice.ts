import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";

interface IInitialState {
  inProgress: boolean,
}

const initialState: IInitialState = {
  inProgress: false
};

const setInProgressTrue = (state: IInitialState) => {
  state.inProgress = true;
};

const setInProgressFalse = (state: IInitialState) => {
  state.inProgress = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //---- данные редьюсеры нигде не фигурируют ----//
    // login: (state) => {
    //   state.inProgress = false;
    // },
    // register: (state) => {
    //   state.inProgress = false;
    // },
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
// export const { login, register, pageWasUnloaded } = authSlice.actions;
export const { pageWasUnloaded } = authSlice.actions;
    //   // if (action.subtype === LOGIN || action.subtype === REGISTER) {
    //   return {...state, inProgress: true};
    // }
    // // },

