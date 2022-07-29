import React from 'react';
import agent from '../../../../agent'
import styles from './style.module.css'

const Tags = (props) => {
  const { tags } = props;
  if (tags) {
    return (
      <div className={styles.tag_list}>
        {
          tags.map((tag) => {
            const handleClick = (ev) => {
              ev.preventDefault();
              props.onClickTag(
                tag,
                (page) => agent.Articles.byTag(tag, page),
                agent.Articles.byTag(tag),
              );
            };

            return (
              <a
                href="src/components/Pages/Home/Tags/Tags"
                className={styles.tag_default}
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
      <div>Загрузка тегов...</div>
  );
};

export default Tags;
