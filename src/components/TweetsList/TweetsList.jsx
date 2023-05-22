import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { TweetsCard } from 'components/TweetItem/TweetsCard';
import { TweetItem } from 'components/TweetsList/TweetsList.styled';
import React, { useEffect, useState } from 'react';
import { useGetTweetsQuery } from 'services/tweetsApi';
import { Cards } from './TweetsList.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectStatusFilter } from '../../redux/filterSlice';

export const TweetsList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const { data: newUsers, isLoading } = useGetTweetsQuery(page);

  const filter = useSelector(selectStatusFilter);
  console.log(filter);

  const filteredUsers = users.filter(user => {
    if (filter === 'all') {
      return true;
    }
    if (filter === 'follow') {
      return user.follow;
    }
    if (filter === 'following') {
      return !user.follow;
    }
    return true;
  });

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (newUsers) {
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
    }
  }, [newUsers]);

  return (
    <>
      <Cards>
        {isLoading && <Loader />}
        {filteredUsers.map(user => (
          <TweetItem key={user.id}>
            <TweetsCard {...user} />
          </TweetItem>
        ))}
      </Cards>
      {users.length > 0 && !isLoading && users.length !== 12 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
};
