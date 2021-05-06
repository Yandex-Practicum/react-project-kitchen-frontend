import styled from 'styled-components';

export const EditorPage = styled.div`
  background-color: #131316;
  min-height: calc(100vh - 56px);
`;

export const Container = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`;

export const Caption = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  width: fill-available;
`;
