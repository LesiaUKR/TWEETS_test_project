import React, {useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Avatar, ButtonFollow, ButtonText, Counts, InfoBox, InfoWrapper } from './TweetsCard.styled';
import { useUpdateFollowersMutation } from 'services/tweetsApi';


export const TweetsCard = ({ id, avatar, tweets, followers, isFollowing }) => {
const [updatedFollowers, setUpdatedFollowers] = useState(100500);
  const [isFollow, setIsFollow] = useState(isFollowing);
  const [updateFollowers] = useUpdateFollowersMutation();

  // Отримуємо збережені значення з local storage при першому рендері
  useEffect(() => {
    const savedFollowers = localStorage.getItem(`followers_${id}`);
    const savedIsFollow = localStorage.getItem(`isFollow_${id}`);

    if (savedFollowers && savedIsFollow) {
      setUpdatedFollowers(Number(savedFollowers));
      setIsFollow(savedIsFollow === 'true');
    }
  }, [id]);

  useEffect(() => {
    if (updatedFollowers !== undefined && isFollow !== undefined) {
      localStorage.setItem(`followers_${id}`, updatedFollowers.toString());
      localStorage.setItem(`isFollow_${id}`, isFollow.toString());
    }
  }, [id, updatedFollowers, isFollow]);


  const handleFollow = async () => {
    const increment = isFollow ? -1 : 1; // Зменшуємо на 1, якщо вже фолловимо, або збільшуємо на 1, якщо ще не фолловимо
    await updateFollowers({ userId: id, increment });
    setUpdatedFollowers(prevFollowers => prevFollowers + increment); // Оновлюємо локальний стан updatedFollowers
    setIsFollow(!isFollow); // Змінюємо стан isFollow
  };

  return (
    <div>
      <InfoBox>
        <Avatar src={avatar} width={62} height={62} alt="user avatar" />
        <InfoWrapper>
          <Counts>{tweets} TWEETS</Counts>
          <Counts>{updatedFollowers} FOLLOWERS</Counts>
          <ButtonFollow isFollow={isFollow} onClick={handleFollow}>
            <ButtonText>{isFollow ? 'FOLLOWING' : 'FOLLOW'}</ButtonText>
          </ButtonFollow>
        </InfoWrapper>
      </InfoBox>
    </div>
  );
};

// TweetItem.propTypes = {
// tweet: PropTypes.number,
//   followers: PropTypes.number,
// };
