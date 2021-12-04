import PropTypes from 'prop-types';
import React from 'react';
import dialogPageStyles from './DialogPage.module.css';

function DialogPage({title, children}) {
  return (
    <div className={dialogPageStyles.page}>
      <div className={dialogPageStyles.container}>
        <p className={dialogPageStyles.title}>{title}</p>
        {children}
      </div>
    </div>
  );
}

DialogPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default DialogPage;
