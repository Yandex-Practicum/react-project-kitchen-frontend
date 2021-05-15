import styled from 'styled-components';

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorName = styled.div`
  margin-left: 8px;
  & > a {
    text-decoration: none;
    color: #F2F2F3;
    text-transform: capitalize;
  }
  & > div {
    font-size: 12px;
    text-transform: capitalize;
  }
`;