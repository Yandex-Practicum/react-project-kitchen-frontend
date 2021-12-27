import React from "react";
import { UserImageWrapper } from "./Styles";
import defaultAvatarPath from '../../images/default-avatar.svg';

export default function UserImage({src, alt, location}) {
  if ( src === 'https://static.productionready.io/images/smiley-cyrus.jpg') {
    src = defaultAvatarPath;
  }
  const isDefault = (src === defaultAvatarPath);
  return (
    <UserImageWrapper src={src} location={location} isDefault={isDefault} />
  );
}