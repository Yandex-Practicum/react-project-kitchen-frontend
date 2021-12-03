import PropTypes from 'prop-types';
import React from "react";
import formStyles from './Form.module.css';

function Form({children, onSubmit}) {
    return (
        <form className={formStyles.form} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;