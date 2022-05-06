import React, {FunctionComponent} from "react";

import avatar from '../images/anna-smirnova.jpg';

import {
  ProfileContainer,
  ProfileImage, ProfileImageBorder,
  ProfileImageWrapper, ProfileText,
  ProfileTextWrapper
} from "./StyledComponents/profile-information-view-styles";

// const ProfileInformationView: FunctionComponent<{avatar: string}> = (props) => {
const ProfileInformationView: FunctionComponent = () => {
  return (
    <ProfileContainer>

      <ProfileImageWrapper>
        <ProfileImageBorder avatar>
          <ProfileImage src={avatar} alt="Аватар пользователя"/>
        </ProfileImageBorder>
      </ProfileImageWrapper>

      <ProfileTextWrapper>
        <ProfileText fontSize="16px" lineHeight="20px">Имя Фамилия</ProfileText>
        <ProfileText fontSize="12px" lineHeight="16px">01 мая 1999</ProfileText>
      </ProfileTextWrapper>
    </ProfileContainer>
  )
}

export default ProfileInformationView;
