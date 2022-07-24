import React from 'react';
import PropTypes from 'prop-types';
import { useIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const PlusIcon = ({
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
      <path d='M12 5V19' stroke={icon.color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M5 12H19' stroke={icon.color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
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
