import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #EBD8FF;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  color: #373737;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
font-size: 18px;
line-height: 22px;
  font-style: normal;
  min-width: 196px;
  box-shadow: 2px 2px 6px 2px rgba(69, 33, 52, 0.8),
    2px 2px 6px 2px rgba(69, 33, 52, 0.8), 2px 2px 6px 2px rgba(69, 33, 52, 0.8);
  &:hover,
  &:focus {
    background-color: #5736A3;
      color: #fff;
  }
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
