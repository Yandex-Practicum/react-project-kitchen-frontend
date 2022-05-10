import { Link } from "react-router-dom";
import styled from "styled-components";
import newNoteIcon from "../../images/Navigation/homeicon.svg";
import logoutIcon from "../../images/Navigation/loginicon.svg";
import settingsIcon from "../../images/Navigation/settingsicon.svg";
import hoveredNewNoteIcon from "../../images/Navigation/hoveredhomeicon.svg";
import hoveredLogoutIcon from "../../images/Navigation/hoveredloginicon.svg";
import hoveredSettingsIcon from "../../images/Navigation/hoveredsettingsicon.svg";

export const NavigationItem = styled.li`
  position: relative;
  font-family: "AlegreyaSans";
  font-weight: 500;
  font-size: 18px;
  color: #008aff;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
  padding: 0 16px 0 18px;

  img {
    margin-right: 11px;
  }

  &:not(:first-child):hover {
    background-color: #008aff;
    color: #fff;

    &:nth-child(2) {
      div {
        background-image: url(${hoveredNewNoteIcon});
        background-color: #008aff;
      }
    }

    &:nth-child(3) {
      div {
        background-image: url(${hoveredSettingsIcon});
        background-color: #008aff;
      }
    }

    &:nth-child(4) {
      div {
        background-image: url(${hoveredLogoutIcon});
        background-color: #008aff;
      }
    }
  }
`;

export const UserNavigationList = styled.ul<any>(
  ({ isHovered }: { isHovered: boolean }) => ({
    listStyleType: "none",
    boxSizing: "border-box",
    width: "172px",
    position: "absolute",
    top: "0",
    left: "100%",
    transform: "translateX(-100%)",
    zIndex: "9999",
    overflow: "hidden",
    maxHeight: isHovered ? "163px" : "40px",
    boxShadow: isHovered
      ? "0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08)"
      : "none",
    borderRadius: isHovered ? "8px" : "none",
    transition: "all linear 0.2s",
  })
);

export const UserNavAvatar = styled.img`
  max-width: 100%;
  height: 27px;
`;

export const LeftFixedNavItem = styled(Link)`
  position: absolute;
  top: 50px;
  left: 10%;
  text-decoration: none !important;
`;

export const RightFixedNavItem = styled.div`
  position: absolute;
  top: 50px;
  right: 10%;
`;

export const CustomNavigationLink = styled(Link)`
  text-decoration: none !important;
  position: absolute;
  display: block;
  height: 40px;
  width: 100%;
`;

export const NewNoteIcon = styled.div`
  background-image: url(${newNoteIcon});
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;

export const SettingsIcon = styled.div`
  background-image: url(${settingsIcon});
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;

export const LogoutIcon = styled.div`
  background-image: url(${logoutIcon});
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;
