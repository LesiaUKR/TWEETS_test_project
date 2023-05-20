import React from 'react';
import PropTypes from 'prop-types';


export const TweetItem = tweet => {
  
  return (
    <li>
      <span>{tweet.tweets}: TWEETS</span>
      <span>{tweet.followers}: FOLLOWERS</span>
      <img src={tweet.avatar} alt="" />
    </li>
  );
};

TweetItem.propTypes = {
tweet: PropTypes.string,
  followers: PropTypes.string,
};
