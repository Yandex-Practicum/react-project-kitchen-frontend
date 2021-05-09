import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './comment.module.css';
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
        {/*<div className={styles.published__user}>
          <Link
            to={`/@${comment.author.username}`}>
            <img src={comment.author.image} alt={comment.author.username} />
          </Link>
          <div className={styles.published__userdata}>
            <Link
              to={`/@${comment.author.username}`}
              className={styles.published__username}>
              {comment.author.username}
            </Link>
            <span className={styles.published__date}>
              {new Date(comment.createdAt).toLocaleString()}
            </span>
          </div>
        </div>*/}
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
