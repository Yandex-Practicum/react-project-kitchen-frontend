import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../delete-button';
import {UserBlock, CommentBlock, CommentText} from './style';
import UserInfo from '../../user-info';

const Comment = ({comment, currentUser, slug}) => {
  const show = currentUser &&
    currentUser.username === comment.author.username;
  return (
    <CommentBlock className="mt-8">
      <CommentText className="text text_type_main-default text_color_inactive">{comment.body}</CommentText>
      <UserBlock>        
        <UserInfo username={comment.author.username} img={comment.author.image} createdAt={comment.createdAt}/>
        <DeleteButton show={show} slug={slug} commentId={comment.id} />     
      </UserBlock>
    </CommentBlock>
    // <div className="card">
    //   <div className="card-block">
    //     <p className="card-text">{comment.body}</p>
    //   </div>
    //   <div className="card-footer">
    //     <Link
    //       to={`/@${comment.author.username}`}
    //       className="comment-author">
    //       <img src={comment.author.image} className="comment-author-img" alt={comment.author.username} />
    //     </Link>
    //     &nbsp;
    //     <Link
    //       to={`/@${comment.author.username}`}
    //       className="comment-author">
    //       {comment.author.username}
    //     </Link>
    //     <span className="date-posted">
    //       {new Date(comment.createdAt).toDateString()}
    //     </span>
    //     <DeleteButton show={show} slug={slug} commentId={comment.id} />
    //   </div>
    // </div>
  );
};

Comment.propTypes = {
  currentUser: PropTypes.object,
  slug: PropTypes.string,
  comment: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string,
      image: PropTypes.string,
      following: PropTypes.bool
    }),
    body: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.string
  })
};

export default Comment;
