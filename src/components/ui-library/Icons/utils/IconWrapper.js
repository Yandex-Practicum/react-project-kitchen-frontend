import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './IconWrapper.module.scss';

const IconWrapper = ({
  children, color, onClick, size, className,
}) => (onClick ? (
    <button
      type='button'
      className={clsx(
        styles.button,
        styles[color] ? styles[color] : 'not_supported_color',
        onClick ? styles.onclick : '',
        className,
      )}
      onClick={onClick}
    >
      <svg
        style={{ minWidth: size }}
        height={size}
        width={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {children}
      </svg>
    </button>
) : (
    <svg
      className={clsx(styles[color] ? styles[color] : 'not_supported_color', className)}
      style={{ minWidth: size }}
      height={size}
      width={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {children}
    </svg>
));

IconWrapper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconWrapper;
