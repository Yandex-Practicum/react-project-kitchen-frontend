import React from "react"
import PropTypes from "prop-types"

import style from "./Button.module.scss"
function Button({ type = "block", variant = "primary", onClick, children, disabled = false , ...props}) {

  const getClassName = () => {
    if (disabled) {
      return style[`disabled-${type}`]
    }

    if (type === 'block') {
      return style[variant]
    }
    if (type === 'link') {
      return style.link
    }

  }

	return (
		<button
      {...props}
			className={getClassName()}
			onClick={onClick}
		>
			{children}
		</button>
	)
}


Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  // children: 
  disabled: PropTypes.bool
}

export default Button
