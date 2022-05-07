import { FC } from "react";
import {StyleBtn} from "./StyledComponents/SignupLoginSubmitBtnStyles";

interface ISignupLoginSubmitBtnProps {
  btnText: string;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

const SignupLoginSubmitBtn: FC<ISignupLoginSubmitBtnProps> = ({
  btnText,
  type = "submit",
  disabled,
}) => {
  return (
    <StyleBtn
      disabled={disabled}
      type={type}
    >
      {btnText}
    </StyleBtn>
  );
};

export default SignupLoginSubmitBtn;
