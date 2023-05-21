import React from 'react'
import { TweetsList } from 'components/TweetsList/TweetsList';
import {BackBtn} from 'components/BackBtn/BackBtn';
import { useGetTweetsQuery } from 'services/tweetsApi';
import { TweetsContainer } from 'components/SharedLayout/SharedLayout.styled';
import { Filter } from 'components/Filter/Filter';



export const TweetsPage = () => {
  const { isLoading } = useGetTweetsQuery();
  return (
    <TweetsContainer>
      {!isLoading && <BackBtn />}
      <Filter/>
      <TweetsList />
    </TweetsContainer>
  );
}
