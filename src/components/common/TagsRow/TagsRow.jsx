import PropTypes from 'prop-types';
import React from 'react';
import tagsRowStyles from './TagsRow.module.css';

const TagsRow = ({ children, align }) => (
  <div className={`${tagsRowStyles.container} ${tagsRowStyles[align]}`}>
    {children}
  </div>
);

TagsRow.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ])),
  ]).isRequired,
};

TagsRow.defaultProps = {
  align: 'left',
};

export default TagsRow;
