import React from 'react';
import agent from '../../agent';
import style from './Tags.module.scss';
import { useSelector } from 'react-redux';

const Tags = (props) => {
  const activeTag = useSelector((state) => state.articles.tag);
  const editTags = useSelector((state) => state.editTags);

  let tags = [].concat(editTags && editTags.length ? editTags : props.tags);

  return (
    <section className={style.tag_list}>
      {tags.map((tag) => {
        const handleClickTag = (ev) => {
          ev.preventDefault();
          if (props.slug) {
            return;
          }
          props.onClickTag(tag, (page) => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
        };

        return (
          <a
            href="/#"
            className={`${style.tag} ${activeTag === tag && style.tag_active} ${
              props.subType ? style.tag_sub : style.tag_default
            }`}
            key={tag + Math.random(10, 100) * 10}
            onClick={handleClickTag}>
            {tag}
          </a>
        );
      })}
    </section>
  );
};

export default Tags;
