import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';
import styles from './article.module.scss';
import Button from '../Button/Button';
import DeleteIcon from '../../assets/ico/DeleteIcon';
import { S_DELETE_ARTICLE } from '../../slices/common';

const mapDispatchToProps = (dispatch) => ({
  onClickDelete: (payload) => dispatch({ type: DELETE_ARTICLE, payload }),
  S_onClickDelete: (payload) => dispatch({ type: S_DELETE_ARTICLE, payload }),
});

const ArticleActions = (props) => {
  const history = useHistory();
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug));
    props.S_onClickDelete(agent.Articles.del(article.slug));
    history.replace(`/`);
  };
  if (props.canModify) {
    return (
      <div className={styles.controls}>
        <Link to={`/editor/${article.slug}`}>
          <Button children={'Редактировать запись'} />
        </Link>

        <button className={styles.controls__delete} onClick={del}>
          <DeleteIcon /> <span>Удалить запись</span>
        </button>
      </div>
    );
  }

  return <span></span>;
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
