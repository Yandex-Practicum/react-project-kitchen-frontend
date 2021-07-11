import ListErrors from '../ListErrors/ListErrors';
import React, { useEffect } from 'react';
import agent from '../../agent';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../../constants/actionTypes';
// import {
//   ADD_TAG,
//   EDITOR_PAGE_LOADED,
//   REMOVE_TAG,
//   EDITOR_PAGE_UNLOADED,
//   UPDATE_FIELD_EDITOR
//   // ARTICLE_SUBMITTED,

// } from '../../slices/editor';
// import {
//   ARTICLE_SUBMITTED
// } from '../../slices/settings';
import clipImg from '../../assets/ico/Clip.svg';
import s from './Editor.module.scss';
import Tags from '../Tags/Tags';

const mapStateToProps = (state) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: () => dispatch({ type: ADD_TAG }),
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: (payload) => dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) => dispatch({ type: UPDATE_FIELD_EDITOR, key, value }),
});

const Editor = (props) => {
  const history = useHistory();

  const updateFieldEvent = (key) => (ev) => props.onUpdateField(key, ev.target.value);
  const changeTitle = updateFieldEvent('title');
  const changeDescription = updateFieldEvent('description');
  const changeImage = updateFieldEvent('image');
  const changeBody = updateFieldEvent('body');
  const changeTagInput = updateFieldEvent('tagInput');
  const watchForEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      props.onAddTag();
    }
  };

  const removeTagHandler = (tag) => () => {
    props.onRemoveTag(tag);
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const article = {
      title: props.title,
      description: props.description,
      image: props.image,
      body: props.body,
      tagList: props.tagList,
    };

    const slug = { slug: props.articleSlug };
    const promise = props.articleSlug
      ? agent.Articles.update(Object.assign(article, slug))
      : agent.Articles.create(article);

    props.onSubmit(promise);
    history.push(`/article/${props.articleSlug}`);
  };

  useEffect(() => {
    if (props.match.params.slug) {
      return props.onLoad(agent.Articles.get(props.match.params.slug));
    }
    props.onLoad(null);

    return () => {
      props.onUnload();
    };
  }, []);

  useEffect(() => {
    if (props.match.params.slug) {
      props.onUnload();
      return props.onLoad(agent.Articles.get(props.match.params.slug));
    }
    props.onLoad(null);
  }, [props.match.params.slug]);

  return (
    <div className={s.container}>
      <ListErrors errors={props.errors}></ListErrors>
      <h2 className={s.title}>Новая запись</h2>
      <form className={s.form}>
        <fieldset className={s.form__item}>
          <input type="text" placeholder="Название записи" value={props.title || ''} onChange={changeTitle} required />

          <input type="text" placeholder="О чём статья?" value={props.description || ''} onChange={changeDescription} />

          <div className={s.image_input}>
            <input type="text" placeholder="URL изображения" value={props.image || ''} onChange={changeImage} />
            <button className={s.form__clip} disabled>
              <img src={clipImg} alt="Clip" />
            </button>
          </div>

          <textarea
            className="form-control"
            rows="8"
            placeholder="Текст записи"
            value={props.body || ''}
            onChange={changeBody}
            required></textarea>

          <div className={s.tags_generator}>
            <input
              type="text"
              placeholder={
                [].concat(props.tagList).length > 2
                  ? 'Пасхалка, больше 3х нельзя'
                  : 'Теги (введите тег и нажмите enter)'
              }
              maxLength={10}
              value={props.tagInput || ''}
              onChange={changeTagInput}
              onKeyDown={watchForEnter}
              disabled={[].concat(props.tagList).length > 2 ? true : false}
            />

            <Tags tags={props.tagList} onClickTag={() => {}} style="dark" />
          </div>

          <Button className={s.form__button} onClick={submitForm}>
            Опубликовать запись
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
