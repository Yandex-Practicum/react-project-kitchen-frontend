import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
  peopleLoading: false,
  peopleFailed: false
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    GET_PEOPLE: (state, action) => {
      state.people = action.payload;
    },
  },
});

export default peopleSlice.reducer;
export const { GET_PEOPLE } = peopleSlice.actions;
