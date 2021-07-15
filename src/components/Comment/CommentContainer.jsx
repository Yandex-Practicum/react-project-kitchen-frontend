import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './comment.module.scss';

const CommentContainer = (props) => {
  if (props.currentUser) {
    return (
      <div className={styles.container}>
        <h2>Комментарии</h2>
        <div>
          <list-errors errors={props.errors}></list-errors>
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList comments={props.article.comments} slug={props.slug} currentUser={props.currentUser} />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Комментарии</h2>
        <p className={styles.logaut__text}>
          <Link to="/login">Войдите в аккаунт</Link>
          &nbsp;или&nbsp;
          <Link to="/register">зарегистрируйтесь</Link>
          &nbsp;чтобы добавить комментарий к этой записи.
        </p>

        <CommentList comments={props.article.comments} slug={props.slug} currentUser={props.currentUser} />
      </div>
    );
  }
};

export default CommentContainer;
