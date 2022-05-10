import React from "react";
import { useSelector } from "react-redux";
import homeIcon from "../../images/Navigation/homeicon.svg";
import loginIcon from "../../images/Navigation/loginicon.svg";
import {
  NavigationItem,
  LeftFixedNavItem,
  RightFixedNavItem,
  CustomNavigationLink,
} from "../StyledComponents/NavigationStyles";
import UserNavigation from "./UserNavigation";

const Navigation = () => {
  const { isLoggedIn } = useSelector((state: any) => state.common);

  return (
    <>
      <LeftFixedNavItem to="/">
        <NavigationItem>
          <img src={homeIcon} alt="Home icon" />
          Главная
        </NavigationItem>
      </LeftFixedNavItem>

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
    </>
  );
};

export default Navigation;
