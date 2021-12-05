import React, { useState } from "react";
import stylesButton from "../Button/Button.module.css";

const Button = ({ onClick, children, isActive }) => {
  const buttonAddStyle = isActive ? stylesButton.active : stylesButton.inactive;

  return (
    <button
      className={`${stylesButton.button} ${buttonAddStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FollowUserButton;
