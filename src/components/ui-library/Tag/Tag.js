import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleTag from './Tag.module.scss';

const Tag = ({
  onClick, active = false, className = '', children = 'Тег',
}) => (
  <div
    className={clsx(
      className,
      styleTag.tag,
      active ? styleTag.active : '',
      onClick ? styleTag.interactive : '',
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

Tag.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default Tag;
