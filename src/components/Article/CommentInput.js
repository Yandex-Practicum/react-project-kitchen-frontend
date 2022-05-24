import React, { useState } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

function CommentInput({onSubmit, slug, currentUser}) {
  const [body, setBody] = useState('')

  function createComment(event) {
    event.preventDefault()
    const payload = agent.Comments.create(slug, { body })
    setBody('')
    onSubmit(payload)
  }
  
  return (
    <form className="card comment-form" onSubmit={createComment}>

      <div className="card-block">
        <textarea className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows="3">
        </textarea>
      </div>

      <div className="card-footer">
        <img
          src={currentUser.image}
          className="comment-author-img"
          alt={currentUser.username} />
        <button
          className="btn btn-sm btn-primary"
          type="submit">
          Post Comment
        </button>
      </div>
      
    </form>
  )
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
