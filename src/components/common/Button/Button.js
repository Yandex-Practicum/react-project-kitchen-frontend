import React, { useState } from "react";
import stylesButton from "../Button/Button.module.css";

const Button = ({ onClick, isActive, title, icon }) => {
  const buttonAddStyle = isActive ? stylesButton.active : stylesButton.inactive;

  return (
    <button
      className={`${stylesButton.button} ${buttonAddStyle}`}
      onClick={onClick}
    >
      <div
        className={stylesButton.icon}
        style={{ visibility: icon ? "visible" : "hidden" }}
      >
        {icon}
      </div>
      {title}
    </button>
  );
};

export default Button;
