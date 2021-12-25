import PropTypes from 'prop-types';
import React from 'react';
import { EyeIcon, EyeOffIcon } from '../../../images/icons';
import inputTextStyles from '../InputText/InputText.module.css';
import inputPasswordStyles from './InputPassword.module.css';

const InputPassword = ({ label, value, placeholder, status, error, onChange }) => {
  const [eyeOff, setEyeOff] = React.useState(true);
  const toggleEye = () => setEyeOff(!eyeOff);

  return (
    <div className={inputTextStyles.container}>
      <p className={inputTextStyles.label}>{label}</p>
      <div className={status ? inputTextStyles[`${status}Value`] : inputTextStyles.value}>
        <input
          className={inputTextStyles.input}
          type={eyeOff ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div
          className={inputPasswordStyles.eye}
          onClick={toggleEye}
        >
          {eyeOff ? <EyeOffIcon /> : <EyeIcon />}
        </div>
      </div>
      {error && (
        <p className={inputTextStyles.error}>{error}</p>
      )}
    </div>
  );
};

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
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
