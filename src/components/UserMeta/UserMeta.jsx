import { Link } from 'react-router-dom';
import React from 'react';
import styles from './user-meta.module.scss';

const UserMeta = props => {
  let section = '';
  props.section === 'article' ? section = props.article : section = props.comment;

  return (
    <>
      <div className={styles.container}>
        <Link to={`/@${section.author.username}`}>
          <img src={section.author.image} alt={section.author.username} />
        </Link>

        <div className={styles.info}>
          <Link 
            to={`/@${section.author.username}`} 
            className={styles.info__name}>
            {section.author.username}
          </Link>
          <span className={styles.info__date}>
            {new Date(section.createdAt).toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserMeta;