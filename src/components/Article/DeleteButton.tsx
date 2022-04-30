import React from "react";
import { connect, useDispatch } from "react-redux";
// import { DELETE_COMMENT } from '../../services/articleSlice';
import { deleteComment } from "../../api";

type TDeleteButtonProps = {
  slug: string;
  commentId: any;
  show: any;
};

const DeleteButton: React.FC<TDeleteButtonProps> = (props) => {
  const dispatch = useDispatch();

  const onClick = (payload: any, commentId: any) => {
    // dispatch({ type: DELETE_COMMENT, payload, commentId });
  };

  const del = () => {
    const payload = deleteComment(props.slug, props.commentId);
    onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  }
  return null;
};

export default DeleteButton;
