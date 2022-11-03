import React from "react"
import PropTypes from "prop-types"
import style from "./Form.module.scss"
import { Button } from ".."

export const Form = ({ button = "OK", onSubmit, onClick, children, disabled }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.inputs}>
        {children}
      </div>
      <div className={style.btn}>
        <Button onClick={onClick} type="primary" htmlType={onSubmit ? "submit" : 'button'} disabled={disabled}>
          {button}
        </Button>
      </div>
    </form>
  )
}

Form.propTypes = {
  button: PropTypes.string,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
}
