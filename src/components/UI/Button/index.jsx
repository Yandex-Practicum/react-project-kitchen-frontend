import React from "react"
import PropTypes from "prop-types"
import style from "./Button.module.scss"

export const Button = ({ type = "primary", onClick, children, disabled = false, active = false }) => {
	const activeClass = active ? style.active : ''
	return (
		<button className={`${style[type]} ${activeClass}`} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'light', 'link', "delete"]),
	onClick: PropTypes.func,
	children: PropTypes.any,
	disabled: PropTypes.bool,
}
