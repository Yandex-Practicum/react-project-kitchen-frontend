import styled from "styled-components";

import homeIcon from '../../images/header/home.png';
import homeIconActive from '../../images/header/home_active.png';
import loginIcon from '../../images/header/login.png';
import loginIconActive from '../../images/header/login_active.png';





export const HeaderNavbar = styled.nav`
  height: 60px;
  margin: 0 auto;
  display: flex;
  background-color: #1C1C21;
`;

export const HeaderContainer = styled.div`
 width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

export const HeaderLinks = styled.ul`
list-style:none;
display: flex;
align-items: center;
margin: 0;
padding: 0 16px 0 0;
/* border: 1px solid white; */


`;

export const HeaderLink = styled.li`
display: flex;
align-items: center;


& > img {
    max-width:24px;
    max-height: 24px;
    margin: 0 8px 0 0;
}
& > a {
text-decoration: none;
margin: 0 16px 0 0;
color: #8585AD;
font-size: 16px;
line-height: 24px;


${({isActive}) => {
    return isActive && 
   ` color: #F2F2F3;`
}}}

`;

