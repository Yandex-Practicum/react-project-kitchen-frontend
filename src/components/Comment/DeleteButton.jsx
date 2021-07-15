import React from 'react';
import agent from '../../agent';
import DeleteIcon from '../../assets/ico/DeleteIcon';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../constants/actionTypes';
import styles from './comment.module.scss';
import { S_DELETE_COMMENT } from '../../slices/articles';

const mapDispatchToProps = (dispatch) => ({
  onClick: (payload, commentId) => dispatch({ type: DELETE_COMMENT, payload, commentId }),
  S_onClick: (payload, commentId) => dispatch({ type: S_DELETE_COMMENT, payload, commentId }),
});

const DeleteButton = (props) => {
  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    props.onClick(payload, props.commentId);
    props.S_onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <span className={styles.delete__button} onClick={del}>
        <DeleteIcon />
      </span>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
