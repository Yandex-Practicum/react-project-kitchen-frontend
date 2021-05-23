import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './comment.module.scss';
import UserMeta from '../UserMeta/UserMeta'

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <section className={styles.published__section}>
      <div className={styles.published__header}>
        <UserMeta 
          comment={props.comment}
          section='comment'
        />
        <div className={styles.published__button}>
          <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
        </div>
      </div>
      <div className={styles.published__textbox}>
        <p className={styles.published__text}>{comment.body}</p>
      </div>
    </section>
  );
};

export default Comment;
