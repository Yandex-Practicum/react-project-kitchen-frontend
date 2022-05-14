import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../services/commonSlice";
import {
  UserNavigationList,
  NavigationItem,
  UserNavAvatar,
  NewNoteIcon,
  SettingsIcon,
  LogoutIcon,
  CustomNavigationLink,
} from "../StyledComponents/NavigationStyles";
import noAvaImg from "../../images/no-avatar.jpg";

const UserNavigation = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.common);
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const onLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <UserNavigationList
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <NavigationItem>
        <CustomNavigationLink to={`@${currentUser.username}`} />
        <UserNavAvatar
          src={currentUser.image ? currentUser.image : noAvaImg}
          alt=""
        />
        {currentUser.username}
      </NavigationItem>

      <NavigationItem>
        <CustomNavigationLink to="/editor" />
        <NewNoteIcon />
        Новая запись
      </NavigationItem>

      <NavigationItem>
        <CustomNavigationLink to="/settings" />
        <SettingsIcon />
        Настройки
      </NavigationItem>

      <NavigationItem onClick={onLogoutClick}>
        <LogoutIcon />
        Выйти
      </NavigationItem>
    </UserNavigationList>
  );
};

export default UserNavigation;
