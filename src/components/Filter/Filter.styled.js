import styled from "styled-components";

export const ContainerFilters = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`;

export const FiltersBtn = styled.button`
padding: 14px 28px;
  background: ${(props) => (props.isFollow ? '#5cd3a8' : '#EBD8FF')};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    min-width: 196px;
    text-transform: uppercase;
    color: #373737;
 
    &:hover,
  &:focus {
    background-color: #5736A3;
      color: #fff;
  
    cursor: pointer;
  }
    
`;