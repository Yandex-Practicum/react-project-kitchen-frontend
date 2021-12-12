import PropTypes from 'prop-types';
import React from 'react';

const ListErrors = ({ errors }) => {
  const keys = Object.keys(errors);
  if (keys.length === 0) {
    return null;
  }
  return (
    <ul className="error-messages">
      {
        keys.map((key) => (
          <li key={key}>
            {errors[key]}
          </li>
        ))
      }
    </ul>
  );
};

ListErrors.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default ListErrors;
