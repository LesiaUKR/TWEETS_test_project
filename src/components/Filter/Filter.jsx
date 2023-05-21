// import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { selectFilter } from '../../redux/selectors';
// import { statusFilters } from '../../redux/constants';
// import { setStatusFilter } from '../../redux/filterSlice';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);
//   const handleFilterChange = filter => dispatch(setStatusFilter(filter));

//   return (
//     <div>
//       <button
//         selected={filter === statusFilters.all}
//         onClick={() => handleFilterChange(statusFilters.all)}
//       >
//         All
//       </button>
//       <button
//         selected={filter === statusFilters.follow}
//         onClick={() => handleFilterChange(statusFilters.follow)}
//       >
//         Follow
//       </button>
//       <button
//         selected={filter === statusFilters.followings}
//         onClick={() => handleFilterChange(statusFilters.followings)}
//       >
//         Followings
//       </button>
//     </div>
//   );
// };
