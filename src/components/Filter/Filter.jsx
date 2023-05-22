import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { changeFilter, selectFilter } from '../../redux/tweetsSlice';
import { ContainerFilters, FiltersBtn } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = filter => {
    dispatch(changeFilter(filter));
  };

  return (
    <ContainerFilters>
      <FiltersBtn
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </FiltersBtn>
      <FiltersBtn
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </FiltersBtn>
      <FiltersBtn
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </FiltersBtn>
    </ContainerFilters>
  );
};
