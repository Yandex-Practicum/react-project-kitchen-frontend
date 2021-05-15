import styled from 'styled-components';

export const CardBlock = styled.div`
  & > div > div {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    & > textarea {    
      min-height: 120px;
    }
  }
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1C1C21;
  padding: 24px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
