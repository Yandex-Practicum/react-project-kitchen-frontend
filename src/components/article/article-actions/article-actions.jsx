import React from 'react';
import PropTypes from 'prop-types';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE, EDIT_ARTICLE } from '../../../constants/actionTypes';
import Button from '../../button';
import editIcon from '../../../images/edit.svg';
import trashIcon from '../../../images/trash.svg';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload }),
  onClickEdit: payload =>
    dispatch({ type: EDIT_ARTICLE, payload })
});

const ArticleActions = ({article, canModify, onClickDelete, onClickEdit}) => {
  const del = () => {
    onClickDelete(agent.Articles.del(article.slug))
  };
  const edit = () => {
    onClickEdit(({slug: article.slug}))
  };
  if (canModify) {
    return (
      <div>
        <Button
          icon={editIcon}
          caption="Редактировать запись"
          onClick={edit}
        />

        <Button
          icon={trashIcon}
          danger
          className="ml-5"
          caption="Удалить запись"
          onClick={del}
        />
      </div>
    );
  }

  return (
    <span>
    </span>
  );
};

ArticleActions.propTypes = {
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  canModify: PropTypes.bool,
  article: PropTypes.shape({
    slug: PropTypes.string
  })
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
