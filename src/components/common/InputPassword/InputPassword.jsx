import PropTypes from 'prop-types';
import React from 'react';
import inputTextStyles from '../InputText/InputText.module.css';

const InputPassword = ({ label, placeholder, error, onChange }) => (
  <div className={inputTextStyles.container}>
    <p className={inputTextStyles.label}>{label}</p>
    <input
      className={error ? inputTextStyles.errorInput : inputTextStyles.input}
      type="password"
      placeholder={placeholder}
      onChange={onChange}
    />
    {error && (
      <p className={inputTextStyles.error}>{error}</p>
    )}
  </div>
);

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputPassword.defaultProps = {
  placeholder: '',
  error: null,
};

export default InputPassword;
