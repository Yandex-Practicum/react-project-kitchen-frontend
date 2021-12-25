import PropTypes from 'prop-types';
import React from 'react';
import { AlertIcon, CheckIcon } from '../../../images/icons';
import inputTextStyles from '../InputText/InputText.module.css';

const InputPassword = ({ label, placeholder, status, error, onChange }) => (
  <div className={inputTextStyles.container}>
    <p className={inputTextStyles.label}>{label}</p>
    <div className={status ? inputTextStyles[`${status}Value`] : inputTextStyles.value}>
      <input
        className={inputTextStyles.input}
        type="password"
        placeholder={placeholder}
        onChange={onChange}
      />
      {status === 'error' && (
        <AlertIcon />
      )}
      {status === 'success' && (
        <CheckIcon />
      )}
    </div>
    {error && (
      <p className={inputTextStyles.error}>{error}</p>
    )}
  </div>
);

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['error', 'success']),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputPassword.defaultProps = {
  placeholder: '',
  status: null,
  error: null,
};

export default InputPassword;
