import PropTypes from 'prop-types';
import React from 'react';
import pageStyles from './Page.module.css';

const Page = ({ children }) => (
  <div className={pageStyles.page}>
    <div className={pageStyles.container}>
      {children}
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Page;
