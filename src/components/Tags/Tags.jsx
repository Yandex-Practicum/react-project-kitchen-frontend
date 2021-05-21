import React, { FC } from 'react';
import agent from '../../agent';

import style from './Tags.module.scss';
import clsx from 'clsx';

const Tags = props => {
  const tags = props.tags;
  var clazz = ""
  switch (props.style) {
    case 'dark':
      clazz = style.tag_dark
      break;
    case 'grey':
      clazz = style.tag_grey
    default:
      break;
  }

  if (tags) {
    return (
      <section className={style.tag_list}>
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <a
                href=""
                className={clsx(style.tag_default, style.tag_pill, clazz)}
                key={tag}
                onClick={handleClick}>
                #{tag}
              </a>
            );
          })
        }
      </section>
    );
  } else {
    return (
      <div>Теги подгружаются...</div>
    );
  }
};

export default Tags;
