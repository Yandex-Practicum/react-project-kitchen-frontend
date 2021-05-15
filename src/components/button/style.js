import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #4C4CFF;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  color: #F2F2F3;
  ${(props) => props.danger && `       
    color: #F20D33;
    background-color: transparent;
  `}  
  &:hover {
    box-shadow: 0px 0px 16px 8px rgba(51, 51, 255, 0.25), 0px 0px 8px 8px rgba(51, 51, 255, 0.25);
	  filter: drop-shadow(0px 4px 32px rgba(51, 51, 255, 0.5));
  }
  &:active {
    opacity: 0.9;	
  }
  &:focus {
    outline:0;
  }
`;
