import React, { FC } from "react";

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
    <button
      disabled={disabled}
      type={type}
      className="btn btn-lg btn-primary pull-xs-right"
    >
      {btnText}
    </button>
  );
};

export default SignupLoginSubmitBtn;
