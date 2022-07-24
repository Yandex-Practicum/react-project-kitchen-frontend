import React from 'react';
import PropTypes from 'prop-types';
import { useIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const LoginIcon = ({
  onClick, size = 'default', color = 'primary', className = '',
}) => {
  const icon = useIconParams({
    onClick,
    size,
    color,
    className,
  });

  return (
    <IconWrapper
      size={icon.size}
      color={icon.color}
      className={icon.className}
      onClick={icon.onClick}
    >
      <path
        d='M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 17L15 12M15 12L10 7M15 12H3'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </IconWrapper>
  );
};

LoginIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default LoginIcon;
