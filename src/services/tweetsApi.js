import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645ccadb250a246ae30e37c6.mockapi.io/api/v1',
  }),
  tagTypes: ['Tweet'],

  endpoints: builder => ({
    getTweets: builder.query({
      query: (page = 1) => `/tweets?page=${page}&limit=3`,
      providesTags: ['Tweet'],
    }),
    updateFollowers: builder.mutation({
      query: (userId, increment) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { followers: increment },
      }),
      invalidatesTags: ['Tweet'],
    }),
  }),
});

export const { useGetTweetsQuery, useUpdateFollowersMutation } = tweetsApi;
