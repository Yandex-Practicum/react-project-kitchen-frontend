import React, { FC } from 'react';
import { fetchArticles } from '../../services/api';

const Tags: FC<{ tags:string[], onClickTag:(key:string)=> void }> = ({ tags, onClickTag }) => {
  if (tags) {
    return (
      <div className='tag-list'>
        {
          tags.map((tag) => {
            const handleClick = (ev:React.MouseEvent) => {
              ev.preventDefault();
              onClickTag(tag);
            };

            return (
              <a
                href=''
                className='tag-default tag-pill'
                key={tag}
                onClick={handleClick}>
                {tag}
              </a>
            );
          })
        }
      </div>
    );
  }
  return (
    <div>Loading Tags...</div>
  );
};
export default Tags
