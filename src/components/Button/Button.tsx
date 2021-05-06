import React, { FC } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

interface IButtons {
  onClick?: () => void;
  className?: string;
}

const Button: FC<IButtons> = ({ children, onClick, className }) => {
  return (
    <button className={clsx(className, s.button)} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
