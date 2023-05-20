import React from 'react';
import { useGetTweetsQuery } from '../services/tweetsApi';


export const TweetsList = () => {
  const { tweets, isLoading } = useGetTweetsQuery();
  console.log('tweets: ', tweets);
    console.log('isLoading: ', isLoading);

  
  return (
    <ul>
      {isLoading && <h1>Loading...</h1>}
      {tweets && tweets.map(tweet => <li key={tweet.id}>{tweet.name}</li>)}
    </ul>
  );
};
