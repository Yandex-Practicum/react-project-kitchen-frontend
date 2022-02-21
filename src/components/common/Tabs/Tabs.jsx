import PropTypes from 'prop-types';
import React from 'react';
import tabsStyles from './Tabs.module.css';

const Tabs = ({ children }) => (
  <div className={tabsStyles.container}>
    {children}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Tabs;
