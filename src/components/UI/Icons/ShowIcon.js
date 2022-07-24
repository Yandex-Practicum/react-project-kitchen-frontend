import React from 'react';
import PropTypes from 'prop-types';
import { useIconParams } from '../ui-utils/transformers';
import IconWrapper from './IconWrapper';

const ShowIcon = ({
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
        d='M1.31409 12C1.31409 12 5.31409 4 12.3141 4C19.3141 4 23.3141 12 23.3141 12C23.3141 12 19.3141 20 12.3141 20C5.31409 20 1.31409 12 1.31409 12Z'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.3141 15C13.9709 15 15.3141 13.6569 15.3141 12C15.3141 10.3431 13.9709 9 12.3141 9C10.6572 9 9.31409 10.3431 9.31409 12C9.31409 13.6569 10.6572 15 12.3141 15Z'
        stroke={icon.color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </IconWrapper>
  );
};

ShowIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ShowIcon;
