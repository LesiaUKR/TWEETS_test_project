import React from 'react'
import { TweetsList } from 'components/TweetsList/TweetsList';
import {BackBtn} from 'components/BackBtn/BackBtn';
// import { Filter } from 'components/Filter/Filter';



export const TweetsPage = () => {

  return (
    <div>
      <BackBtn/>
      {/* <Filter/> */}
      <TweetsList />
    </div>
  );
}
