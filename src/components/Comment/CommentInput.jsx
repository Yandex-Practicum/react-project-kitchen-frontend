import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';
import styles from './comment.module.css';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };

    this.setBody = ev => {
      this.setState({ body: ev.target.value });
    };

    this.createComment = ev => {
      ev.preventDefault();
      const payload = agent.Comments.create(this.props.slug,
        { body: this.state.body });
      this.setState({ body: '' });
      this.props.onSubmit(payload);
    };
  }

  render() {
    return (
      <form className={styles.create__form} onSubmit={this.createComment}>
        <section className={`${styles.create__header}`}>
          <textarea className={styles.create__textarea}
            placeholder="Написать комментарий"
            value={this.state.body}
            onChange={this.setBody}
            rows="3">
          </textarea>
        </section>
        <section className={styles.create__footer}>
          <button
            className={styles.create__button}
            type="submit">
            Отправить комментарий
          </button>
        </section>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
