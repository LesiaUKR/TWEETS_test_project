import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #ebd8ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  color: #373737;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  min-width: 196px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  &:hover,
  &:focus {
    background-color: #5736a3;
    color: #fff;
  }
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
