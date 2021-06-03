import {useState} from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';
import styles from './comment.module.scss';
import Button from '../Button/Button';
import { Editor, EditorState } from 'draft-js'
// import { ADD_COMMENT } from '../../slices/articleList';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

const CommentInput = (props) => {
  const [body, setBody] = useState('')

    const currentBody = ev => {
      setBody(ev.target.value);
    };

    const createComment = ev => {
      ev.preventDefault();
      const payload = agent.Comments.create(props.slug,
        { body: body});
      setBody('');
      props.onSubmit(payload);
    };

  return (
    <form className={styles.create__form} onSubmit={createComment}>
      <section className={styles.create__header}>
        <textarea className={styles.create__textarea}
         placeholder="Написать комментарий"
         value={body}
        onChange={currentBody}
         rows="3"
        required>
        </textarea>
      </section>
      <section className={styles.create__footer}>
        <Button type="submit">Отправить комментарий</Button>
      </section>
    </form>
  );
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
