import React, {useState} from 'react';
import PropTypes from 'prop-types';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

function CommentInput({currentUser, slug, onSubmit}) {
  const [body, setBody] = useState('');

  function changeBody(ev) {
    setBody(ev.target.value);
  }
  
  function createComment(ev) {
    ev.preventDefault();
    const payload = agent.Comments.create(slug, { body: body });
    setBody('');
    onSubmit(payload);
  }

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={changeBody}
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
  );
}

CommentInput.propTypes = {
  currentUser: PropTypes.object,
  slug: PropTypes.string,
  onSubmit: PropTypes.func
};

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
