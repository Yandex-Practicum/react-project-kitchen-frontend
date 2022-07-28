import React from 'react';
import PropTypes from 'prop-types';
import { useIconParams } from '../ui-utils/hooks';
import IconWrapper from './IconWrapper';

const MinusIcon = ({
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
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5 12H19' stroke={icon.color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </IconWrapper>
  );
};

MinusIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MinusIcon;
