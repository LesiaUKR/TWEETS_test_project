import { createSlice } from '@reduxjs/toolkit';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const selectFilter = state => state.tweets.filter;
export const { changeFilter} = tweetsSlice.actions;
