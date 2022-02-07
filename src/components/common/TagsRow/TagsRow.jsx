import PropTypes from 'prop-types';
import React from 'react';
import tagsRowStyles from './TagsRow.module.css';

const TagsRow = ({ children }) => (
  <div className={tagsRowStyles.container}>
    {children}
  </div>
);

TagsRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default TagsRow;
