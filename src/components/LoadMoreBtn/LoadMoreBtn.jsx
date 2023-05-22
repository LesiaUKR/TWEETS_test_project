import PropTypes from 'prop-types';
import { LoadMore, BtnWrapper } from './LoadMoreBtn.styled';

export function LoadMoreBtn({ onClick }) {
  return (
    <BtnWrapper>
      <LoadMore type="button" onClick={onClick}>
        LOAD MORE
      </LoadMore>
    </BtnWrapper>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
