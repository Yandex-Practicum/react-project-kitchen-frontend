import React from 'react';
import PropTypes from 'prop-types';
import { getIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const ChevronLeftIcon = ({
  onClick, size = 'default', color = 'primary', className = '',
}) => {
  const { color: iconColor } = getIconParams({
    color,
  });

  return (
    <IconWrapper size={size} color={color} className={className} onClick={onClick}>
        <path d='M11 17L6 12L11 7' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M18 17L13 12L18 7'
          stroke={iconColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
    </IconWrapper>
  );
};

ChevronLeftIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ChevronLeftIcon;
