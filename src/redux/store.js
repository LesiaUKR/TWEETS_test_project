import {configureStore } from '@reduxjs/toolkit';
import { tweetsApi } from 'services/tweetsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { tweetsSlice } from './tweetsSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsSlice.reducer,
    filters: filtersReducer,
    [tweetsApi.reducerPath]: tweetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tweetsApi.middleware)
  ,
});

setupListeners(store.dispatch);