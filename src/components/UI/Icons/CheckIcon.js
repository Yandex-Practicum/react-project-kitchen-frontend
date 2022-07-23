import React from 'react';
import PropTypes from 'prop-types';
import { getIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const CheckIcon = ({
  onClick, size = 'default', color = 'primary', className = '',
}) => {
  const { color: iconColor } = getIconParams({
    color,
  });

  return (
    <IconWrapper size={size} color={color} className={className} onClick={onClick}>
      <path d='M20 6L9 17L4 12' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </IconWrapper>
  );
};

CheckIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CheckIcon;
