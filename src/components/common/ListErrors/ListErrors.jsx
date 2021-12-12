import PropTypes from 'prop-types';
import React from 'react';
import { AlertIcon } from '../../../images/icons';
import listErrorsStyles from './ListErrors.module.css';

const ListErrors = ({ errors }) => {
  const keys = Object.keys(errors);
  if (keys.length === 0) {
    return null;
  }
  return (
    <div className={listErrorsStyles.errors}>
      {
        keys.map((key) => (
          <div
            key={key}
            className={listErrorsStyles.error}
          >
            <AlertIcon />
            <p className={listErrorsStyles.text}>{errors[key]}</p>
          </div>
        ))
      }
    </div>
  );
};

ListErrors.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ListErrors;
