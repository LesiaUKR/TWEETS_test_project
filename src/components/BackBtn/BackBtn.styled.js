import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 8px 8px;
  margin-left: 10px;
  text-decoration: none;
  color: #5736a3;
  font-size: 24px;
  font-weight: 500;
  :hover {
    color: #5736a3;
    font-weight: 700;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
