import Comment from './Comment';
import React from 'react';

type TCommentListProps = { 
  comments: any[]; 
  currentUser: { 
    username: string; 
  }; 
  slug: string; 
}

const CommentList: React.FC<TCommentListProps> = (props) => {
  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};

export default CommentList;
