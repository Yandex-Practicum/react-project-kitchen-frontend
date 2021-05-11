import styled from "styled-components";

export const HeaderNavbar = styled.nav`
  height: 60px;
  margin: 0 auto;
  display: flex;
  background-color: #1c1c21;
`;

export const HeaderContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 16px 0 0;
`;

export const HeaderLink = styled.li`
  display: flex;
  align-items: center;

  & > img {
    max-width: 24px;
    max-height: 24px;
    margin: 0 8px 0 0;
  }
  & > a {
    text-decoration: none;
    margin: 0 16px 0 0;
    color: #8585ad;
    font-size: 16px;
    line-height: 24px;

    ${({ isActive }) => {
      return isActive && ` color: #F2F2F3;`;
    }}
  }
`;
