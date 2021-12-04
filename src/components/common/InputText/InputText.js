import PropTypes from 'prop-types';
import React from "react";
import inputTextStyles from './InputText.module.css';

function InputText({label, value, placeholder, onChange}) {
  return (
    <div className={inputTextStyles.container}>
      <p className={inputTextStyles.name}>{label}</p>
      <input
        className={inputTextStyles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  placeholder: '',
};

export default InputText;