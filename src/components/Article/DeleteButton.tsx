import React from "react";
import { connect, useDispatch } from "react-redux";
// import { DELETE_COMMENT } from '../../services/articleSlice';
import { deleteComment } from "../../api";
import { deleteCommentThunk, getCommentsForArticleThunk } from "../../services/thunks";

type TDeleteButtonProps = {
  slug: string;
  commentId: any;
  show: any;
};
const DeleteButton: React.FC<TDeleteButtonProps> = (props) => {
  const dispatch = useDispatch();

  const deleteComment = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(deleteCommentThunk({slug: props.slug, commentId: props.commentId}))
    .unwrap().then(() => {
      dispatch(getCommentsForArticleThunk(props.slug))
    })
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={deleteComment}></i>
      </span>
    );
  }
  return null;
};

export default DeleteButton;
