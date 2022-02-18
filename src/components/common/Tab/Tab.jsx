import PropTypes from 'prop-types';
import React from 'react';
import tabStyles from './Tab.module.css';

const Tab = ({ name, value, isActive, onClick }) => (
  <div
    className={isActive ? tabStyles.container : tabStyles.inactiveContainer}
    onClick={() => onClick(value)}
  >
    <p className={isActive ? tabStyles.name : tabStyles.inactiveName}>{name}</p>
  </div>
);

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  value: null,
  isActive: true,
  onClick: () => {},
};

export default Tab;
