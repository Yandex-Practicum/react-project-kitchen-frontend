import React, { FC } from 'react';
import s from './style.module.scss';

const Page404: FC = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Ошибка 404</h2>
      <p className={s.subtitle}>Страница не найдена</p>
    </div>
  );
};

export default Page404;
