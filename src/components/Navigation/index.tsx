import React from "react";
import { useSelector } from "react-redux";
import homeIcon from "../../images/Navigation/homeicon.svg";
import loginIcon from "../../images/Navigation/loginicon.svg";
import {
  NavigationItem,
  LeftFixedNavItem,
  RightFixedNavItem,
  CustomNavigationLink,
  NavigationItemWrapper,
} from "../StyledComponents/NavigationStyles";
import UserNavigation from "./UserNavigation";

const Navigation = () => {
  const { isLoggedIn } = useSelector((state: any) => state.common);

  return (
    <>
      <NavigationItemWrapper>
        <LeftFixedNavItem to="/">
          <NavigationItem>
            <img src={homeIcon} alt="Home icon" />
            Главная
          </NavigationItem>
        </LeftFixedNavItem>
      </NavigationItemWrapper>

      <NavigationItemWrapper>
        {isLoggedIn ? (
          <RightFixedNavItem>
            <UserNavigation />
          </RightFixedNavItem>
        ) : (
          <RightFixedNavItem>
            <NavigationItem>
              <CustomNavigationLink to="/login" />
              <img src={loginIcon} alt="Login icon" />
              Войти
            </NavigationItem>
          </RightFixedNavItem>
        )}
      </NavigationItemWrapper>
    </>
  );
};

export default Navigation;
