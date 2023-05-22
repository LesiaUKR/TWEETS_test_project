import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
`;

export const Container = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const TweetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;
