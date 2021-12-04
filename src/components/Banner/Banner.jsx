import React from 'react';
import PropTypes from 'prop-types';
import bannerStyle from './Banner.module.css';

const Banner = ({ appName }) => (
  <section className={bannerStyle.banner}>
    <h1 className={bannerStyle.title}>{appName}</h1>
    <p>Место, где готовится новый опыт</p>
  </section>
);

export default Banner;

Banner.propTypes = {
  appName: PropTypes.string.isRequired,
};
