import React, { useState } from "react";
import stylesButton from "../Button/Button.module.css";

const FollowUserButton = ({ onClick, children, isActive }) => {
  const [prevIsActive, setPrevIsActive] = useState(true);

  const [buttonAddStyle, setButtonAddStyle] = useState(stylesButton.active);

  if (isActive) {
    if (buttonAddStyle === stylesButton.inactive)
      setButtonAddStyle(stylesButton.active);
  } else {
    if (buttonAddStyle === stylesButton.active)
      setButtonAddStyle(stylesButton.inactive);
  }

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
