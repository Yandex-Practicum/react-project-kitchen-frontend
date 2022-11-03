import React from "react"
import PropTypes from "prop-types"
import style from "./FormWrapper.module.scss"
import { Button, Title } from ".."
import ListErrors from "components/ListErrors"
import { Link } from "react-router-dom"

export const FormWrapper = ({ title, children, errors, link, linkName }) => {
  return (
    <div className={style.wrapper}>
      <Title type={2}>{title}</Title>
      {link && linkName && <Button type='link'><Link to={link}>{linkName}</Link></Button>}
      {errors && <ListErrors errors={errors} />}
      {children}
    </div>
  )
}

FormWrapper.propTypes = {
  errors: PropTypes.any,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkName: PropTypes.string,
}
