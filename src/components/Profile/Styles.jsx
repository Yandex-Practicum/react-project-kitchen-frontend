import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
  box-shadow: inset 0px -2px 0px ${props => props.active ? 'rgba(0, 0, 255, 1)' : 'rgba(0, 0, 255, 0)'};
  max-width: max-content;
`;
export const StyledActiveTab = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #0A0A0B;
`;

export const StyledLink = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

background-color: #0000FF;
border-radius: 8px;
color: #FFF !important;
height: 40px;
`;

export const UserImage = styled.img`
  background: #E9E9ED;
  border: 2px solid #0A0A0B;
  border-radius: 50%;;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
`;