import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';

const CommentList = ({comments, currentUser, slug}) => {
  return (
    <div>
      {
        comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={currentUser}
              slug={slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(Comment.propTypes.comment),
  currentUser: PropTypes.object,
  slug: PropTypes.string
};

export default CommentList;
