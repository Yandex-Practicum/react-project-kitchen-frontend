import { FavoritesIcon } from 'components/Icons'
import React from 'react'
import { Button } from '..'

export const LikeUnlikeButton = ({ children, onClick, favorited }) => {
  const buttonType = favorited ? "delete" : "light"
  const iconType = favorited ? "default" : "active"
  return (
    <Button onClick={onClick} type={buttonType}>{children}<FavoritesIcon type={iconType} /></Button>
  )
}
