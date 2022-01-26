import PropTypes from 'prop-types';
import React from 'react';
import { AlertIcon, CheckIcon } from '../../../images/icons';
import inputTextStyles from '../InputText/InputText.module.css';
import inputMultilineTextStyles from './InputMultilineText.module.css';

const InputMultilineText = ({ label, value, placeholder, lines, status, error, onChange }) => (
  <div className={inputTextStyles.container}>
    <p className={inputTextStyles.label}>{label}</p>
    <div className={status ? inputTextStyles[`${status}Value`] : inputTextStyles.value}>
      <textarea
        className={inputMultilineTextStyles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={lines}
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

InputMultilineText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  lines: PropTypes.number,
  status: PropTypes.oneOf(['error', 'success']),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputMultilineText.defaultProps = {
  placeholder: '',
  lines: 5,
  status: null,
  error: null,
};

export default InputMultilineText;
