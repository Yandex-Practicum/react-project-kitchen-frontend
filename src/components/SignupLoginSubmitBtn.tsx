import React, { FC } from "react";
import {StyleBtn} from "../components/StyledComponents/SignupLoginSubmitBtnStyles"

interface ISignupLoginSubmitBtnProps {
  btnText: string;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

const SignupLoginSubmitBtn: FC<ISignupLoginSubmitBtnProps> = ({
  btnText,
  type = "submit",
  disabled = false,
}) => {
  return (
    <StyleBtn
      disabled={disabled}
      type={type}
      className="btn btn-lg btn-primary pull-xs-right"
    >
      {btnText}
    </StyleBtn>
  );
};

export default SignupLoginSubmitBtn;
