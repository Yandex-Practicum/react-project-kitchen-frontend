import React from 'react';
import PropTypes from 'prop-types';
import { getIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const ChevronRightIcon = ({
  onClick, size = 'default', color = 'primary', className = '',
}) => {
  const { color: iconColor } = getIconParams({
    color,
  });

  return (
    <IconWrapper size={size} color={color} className={className} onClick={onClick}>
        <path d='M13 17L18 12L13 7' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M6 17L11 12L6 7' stroke={iconColor} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </IconWrapper>
  );
};

ChevronRightIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ChevronRightIcon;
