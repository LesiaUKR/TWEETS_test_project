import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { TweetsCard } from 'components/TweetItem/TweetsCard';
import { TweetItem } from 'components/TweetItem/TweetsCard.styled';
import React, { useEffect, useState } from 'react';
import { useGetTweetsQuery } from 'services/tweetsApi';


export const TweetsList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const { data: newUsers, isLoading } = useGetTweetsQuery(page);

  console.log('users: ', users);
  console.log('isLoading: ', isLoading);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (newUsers) {
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
    }
  }, [newUsers]);

  return (
    <div>
      <ul>
        {isLoading && <h1>Loading...</h1>}
        {users &&
          users.map(user => (
            <TweetItem key={user.id}>
              <TweetsCard key={user.id} {...user} />
            </TweetItem>
          ))}
      </ul>
      {users && users.length === 12 ? null : (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};
