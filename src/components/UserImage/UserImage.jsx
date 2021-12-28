import React from "react";
import PropTypes from 'prop-types';
import { UserImageWrapper } from "./Styles";
import defaultAvatarPath from '../../images/default-avatar.svg';

const defaultAvatarURL = 'https://static.productionready.io/images/smiley-cyrus.jpg';

export default function UserImage({src, location}) {
  if ( src === defaultAvatarURL ) {
    src = defaultAvatarPath;
  }
  const isDefault = (src === defaultAvatarPath);
  return (
    <UserImageWrapper src={src} location={location} isDefault={isDefault} />
  );
}

UserImage.propTypes = {
  src: PropTypes.string,
  location: PropTypes.string
};