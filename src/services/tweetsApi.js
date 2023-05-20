import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645ccadb250a246ae30e37c6.mockapi.io/api/v1/tweets',
  }),
  tagTypes: ['Tweet'],

  endpoints: builder => ({
    getTweets: builder.query({
      query: (page = 1) => `tweets?page=${page}&limit=3`,
      providesTags: ['Tweet'],
    }),
  }),
});

export const {
  useGetTweetsQuery,
} = tweetsApi;
