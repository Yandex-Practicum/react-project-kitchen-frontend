import PropTypes from 'prop-types';
import React from "react";
import inputTextStyles from '../InputText/InputText.module.css';

function InputPassword({label, value, placeholder, onChange}) {
  return (
    <div className={inputTextStyles.container}>
      <p className={inputTextStyles.name}>{label}</p>
      <input
        className={inputTextStyles.input}
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </div>
  );
}

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputPassword.defaultProps = {
  placeholder: '',
};

export default InputPassword;