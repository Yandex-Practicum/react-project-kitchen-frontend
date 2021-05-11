import React from 'react';
import PropTypes from 'prop-types';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClick: (payload, commentId) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId })
});

const DeleteButton = ({slug, commentId, onClick, show}) => {
  const del = () => {
    const payload = agent.Comments.delete(slug, commentId);
    onClick(payload, commentId);
  };

  if (show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  }
  return null;
};

DeleteButton.propTypes = {
  slug: PropTypes.string,
  commentId: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func
};

export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
