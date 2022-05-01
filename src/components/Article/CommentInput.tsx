import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCommentThunk } from "../../services/thunks";


type TCommentInputProps = {
  currentUser: {
    username: any;
    image: string;
  };
  slug: any;
};


const CommentInput: React.FC<TCommentInputProps> = (props) => {
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();
  const currentBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const createComment = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createCommentThunk({slug: props.slug, comment: {body: body} }))
    setBody("");
  };

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={currentBody}
          // rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        F
        <img
          src={props.currentUser.image}
          className="comment-author-img"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
