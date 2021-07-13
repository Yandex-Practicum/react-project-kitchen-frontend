import React from 'react';

const ListErrors = (props) => {
  const errors = props.errors;
  const render = () => {
    if (errors) {
      return (
        <ul className="error-messages">
          {Object.keys(errors).map((key) => {
            return (
              <li key={key}>
                {key} {errors[key]}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  };
  return render();
};

export default ListErrors;
