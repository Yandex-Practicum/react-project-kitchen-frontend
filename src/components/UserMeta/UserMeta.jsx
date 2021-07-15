import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './user-meta.module.scss';
import BaseAvatarIcon from '../../assets/ico/BaseAvatarIcon';
import Preloader from '../Preloader/Preloader';

const UserMeta = (props) => {
  let section = '';
  useEffect(() => {}, [section]);

  if (section === undefined) {
    <Preloader />;
  }
  props.section === 'article' ? (section = props.article) : (section = props.comment);
  const authorImage = section ? section.author.image : null;

  return (
    <>
      <div className={styles.container}>
        <Link to={`/profile/${section.author.username}`} className={styles.avatar}>
          {authorImage === 'https://static.productionready.io/images/smiley-cyrus.jpg' && <BaseAvatarIcon />}
          {authorImage !== 'https://static.productionready.io/images/smiley-cyrus.jpg' && (
            <img src={section.author.image} alt={section.author.username} />
          )}
        </Link>

        <div className={styles.info}>
          <Link to={`/profile/${section.author.username}`} className={styles.info__name}>
            {section.author.username}
          </Link>
          <span className={styles.info__date}>{new Date(section.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </>
  );
};

export default UserMeta;
