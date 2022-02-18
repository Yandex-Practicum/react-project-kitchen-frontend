import React from 'react';
import PropTypes from 'prop-types';
import PageBanner from '../common/PageBanner/PageBanner';
import bannerStyles from './Banner.module.css';

const Banner = ({ appName }) => (
  <PageBanner>
    <p className={bannerStyles.title}>{appName}</p>
    <p className={bannerStyles.text}>Место, где готовится новый опыт</p>
  </PageBanner>
);

Banner.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Banner;
