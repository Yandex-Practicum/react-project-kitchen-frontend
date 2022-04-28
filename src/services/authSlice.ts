import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inProgress: false,
  errors: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.inProgress = false,
      state.errors = action.payload.errors ? action.payload.errors : null
    },
    REGISTER: (state, action) => {
      state.inProgress = false,
      state.errors = action.payload.errors ? action.payload.errors : null
    },

    LOGIN_PAGE_UNLOADED: () => initialState,

    REGISTER_PAGE_UNLOADED: (state, action) => initialState,

    //Непонятно зачем эти строки, так что пока закомментированными оставим.
    // ASYNC_START: (state, action) => {
    //   console.log(1111);
    //   if (action.subtype === LOGIN || action.subtype === REGISTER) {
    //     return { ...state, inProgress: true };
    //   }
    // },

  }
})

export default authSlice.reducer
//Раскомментировать со строками 25-31 или удалить вместе с ними.
// export const { ASYNC_START, REGISTER, REGISTER_PAGE_UNLOADED, UPDATE_FIELD_AUTH } = authSlice.actions
export const { REGISTER, REGISTER_PAGE_UNLOADED } = authSlice.actions
