import React from "react"
import PropTypes from "prop-types"
import style from "./Button.module.scss"

export const Button = ({ type = "primary", onClick, children, disabled = false }) => {
	return (
		<button className={style[type]} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'light', 'link']),
	onClick: PropTypes.func,
	children: PropTypes.any,
	disabled: PropTypes.bool,
}
