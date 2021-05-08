import React, { FC } from 'react';
import agent from '../../agent';

import style from './Tags.module.scss';
import clsx from 'clsx';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      // <div className="tag-list">
      <div className={style.tag_list}>
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <a
                href=""
                // className="tag-default tag-pill"
                className={clsx(style.tag_default, style.tag_pill)}
                key={tag}
                onClick={handleClick}>
                {tag}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

export default Tags;
