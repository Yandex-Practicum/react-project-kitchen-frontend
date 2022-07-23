import React from 'react';
import PropTypes from 'prop-types';
import { getIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const PlusIcon = ({
  onClick, size = 'default', color = 'primary', className = '',
}) => {
  const { color: iconColor } = getIconParams({
    color,
  });

  return (
    <IconWrapper size={size} color={color} className={className} onClick={onClick}>
      <path d='M12 5V19' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M5 12H19' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </IconWrapper>
  );
};

PlusIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PlusIcon;
