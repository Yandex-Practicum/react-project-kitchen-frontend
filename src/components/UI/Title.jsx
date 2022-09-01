import React from 'react'
import PropTypes from 'prop-types'
import style from './Typography.module.scss'

function Title({type = 1, color = 'primary', children}) {
  const textTypes = {
    1: 'header1',
    2: 'header2',
    3: 'headerline'
  }

  return (
    <p className={`${style[textTypes[type]]} ${style[color]}`}>{children}</p>
  )
}

Title.propTypes = {
  type: PropTypes.oneOf([1, 2, 3]),
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string.isRequired
}

export default Title