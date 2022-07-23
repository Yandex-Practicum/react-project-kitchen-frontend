import React from 'react';
import PropTypes from 'prop-types';
import { getIconParams } from '../ui-utils/transformers';

const IconWrapper = ({
  children, onClick, size, color, className,
}) => {
  const icon = getIconParams({
    size,
    color,
    className,
    onClick,
  });

  return (
    <svg
      className={className}
      style={icon.style}
      height={icon.size}
      width={icon.size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={icon.onClick}
    >
      {children}
    </svg>
  );
};

IconWrapper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconWrapper;
