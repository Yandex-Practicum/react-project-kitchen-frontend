import PropTypes from 'prop-types';
import React from 'react';
import inputTextStyles from './InputText.module.css';

const InputText = ({ label, value, placeholder, error, onChange }) => (
  <div className={inputTextStyles.container}>
    <p className={inputTextStyles.label}>{label}</p>
    <input
      className={error ? inputTextStyles.errorInput : inputTextStyles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && (
      <p className={inputTextStyles.error}>{error}</p>
    )}
  </div>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  placeholder: '',
  error: null,
};

export default InputText;
