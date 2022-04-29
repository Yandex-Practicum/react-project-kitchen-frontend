import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
  inProgress: boolean,
  errors: null | any, // TODO: выснить, какого типа ошибки. string или это объект/массив?
}

const initialState: IInitialState = {
  inProgress: false,
  errors: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.inProgress = true;
    },
    isError: (state,  action: PayloadAction<any>) => { // TODO: см. выше про ошибки
      // state.errors = action && action.error ? action.payload.errors : null;
    },
    authSuccess: (state,) => {
      state.inProgress = false;
    },
    pageWasUnloaded: (state) => initialState,

    // ASYNC_START: (state, action) => {
    //   // if (action.subtype === LOGIN || action.subtype === REGISTER) {
    //   return {...state, inProgress: true};
    // }
    // // },
  }
})

export default authSlice.reducer
export const {
  isLoading,
  isError,
  pageWasUnloaded,
} = authSlice.actions
