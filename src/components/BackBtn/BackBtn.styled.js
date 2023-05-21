import styled from "styled-components";
import { Link} from 'react-router-dom';


export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 8px 8px;
  text-decoration: none;
  color: #5736A3;
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: #5736A3;
      font-weight: 700;
    transform: scale(1.3);
    cursor: pointer;
  }
`;