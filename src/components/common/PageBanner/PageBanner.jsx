import PropTypes from 'prop-types';
import React from 'react';
import pageBannerStyles from './PageBanner.module.css';

const PageBanner = ({ children }) => (
  <div className={pageBannerStyles.banner}>
    <div className={pageBannerStyles.container}>
      {children}
    </div>
  </div>
);

PageBanner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default PageBanner;
