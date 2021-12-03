import PropTypes from 'prop-types';
import React from "react";
import formButtonsStyles from './FormButtons.module.css';

function FormButtons({children}) {
    return (
        <div className={formButtonsStyles.formButtons}>
            {children}
        </div>
    );
}

FormButtons.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};

export default FormButtons;