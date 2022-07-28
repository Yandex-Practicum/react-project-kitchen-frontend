import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleTextField from './TextField.module.scss';

const TextField = ({
  name, type = 'text', label = 'Название поля', className = '',
}) => (
  <div className={clsx(className, styleTextField.text_field)}>
    <label htmlFor={name} className={styleTextField.label}>
      {label}
    </label>
    <input type={type} id={name} name={name} className={styleTextField.input}></input>
  </div>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextField;
