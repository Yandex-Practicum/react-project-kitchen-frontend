import styled from 'styled-components';

export const ArticlePage = styled.div`
  background-color: #131316;
  min-height: calc(100vh - 56px);
`;

export const Container = styled.div`
  max-width: 1108px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 425px) {
    padding: 0 8px;
  } 
`;

export const Title = styled.h1`
  text-align: start;
`;

export const ArticleBody = styled.div`
  & > p {
    margin-top: 32px;
    margin-bottom: 0;
  }
  & > p:last-child {
    margin-bottom: 32px;
  }
`;
