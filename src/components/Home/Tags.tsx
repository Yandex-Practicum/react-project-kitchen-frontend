import React from 'react';
import agent from '../../agent';

type TTagsProps = {
  tags: string[] | null,
  onClickTag: (tag: string, pager: (page: any) => {}, payload: any) => {}
}

const Tags: React.FC<TTagsProps> = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };
            return (
              <a
                href=""
                className="tag-default tag-pill"
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
