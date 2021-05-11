import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

const ArticleActions = ({article, canModify, onClickDelete}) => {
  const del = () => {
    onClickDelete(agent.Articles.del(article.slug))
  };
  if (canModify) {
    return (
      <span>

        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

ArticleActions.propTypes = {
  onClickDelete: PropTypes.func,
  canModify: PropTypes.bool,
  article: PropTypes.shape({
    slug: PropTypes.string
  })
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
