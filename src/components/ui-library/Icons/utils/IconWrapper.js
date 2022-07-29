import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const IconWrapper = ({
  children, onClick, size, className,
}) => (
  <svg
    className={clsx(className)}
    style={onClick ? { cursor: 'pointer', minWidth: size } : { minWidth: size }}
    height={size}
    width={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
  >
    {children}
  </svg>
);

IconWrapper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconWrapper;
