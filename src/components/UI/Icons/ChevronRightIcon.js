import React from 'react';
import PropTypes from 'prop-types';
import { useIconParams } from '../ui-utils/hooks';
import IconWrapper from './IconWrapper';

const ChevronRightIcon = ({
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
        <path d='M13 17L18 12L13 7' stroke={icon.color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M6 17L11 12L6 7' stroke={icon.color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
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
