import ListErrors from '../ListErrors/ListErrors';
import React, { useEffect, useState } from 'react';
import agent from '../../agent';
import Button from '../Button/Button';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADD_TAG, EDITOR_PAGE_LOADED, REMOVE_TAG, ARTICLE_SUBMITTED } from '../../constants/actionTypes';
import { S_ADD_TAG, S_EDITOR_PAGE_LOADED, S_REMOVE_TAG } from '../../slices/articles';
import { S_ARTICLE_SUBMITTED } from '../../slices/common';
import clipImg from '../../assets/ico/Clip.svg';
import s from './Editor.module.scss';
import Tags from '../Tags/Tags';

const mapStateToProps = (state) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: (payload) => dispatch({ type: ADD_TAG, payload }),
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  S_onAddTag: (payload) => dispatch({ type: S_ADD_TAG, payload }),
  S_onLoad: (payload) => dispatch({ type: S_EDITOR_PAGE_LOADED, payload }),
  S_onRemoveTag: (tag) => dispatch({ type: S_REMOVE_TAG, tag }),
  S_onSubmit: (payload) => dispatch({ type: S_ARTICLE_SUBMITTED, payload }),
});

const Editor = (props) => {
  const history = useHistory();
  const editorState = useSelector((state) => state.editor);
  const [submitFlag, setSubmitFlag] = useState(false);

  useEffect(() => {
    if (props.match.params.slug) {
      props.onLoad(agent.Articles.get(props.match.params.slug));
      return props.S_onLoad(agent.Articles.get(props.match.params.slug));
    }
    props.onLoad();
    props.S_onLoad();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!submitFlag) {
      setFormData({
        title: editorState.title,
        description: editorState.description,
        image: editorState.image,
        body: editorState.body,
        tagList: editorState.tagList,
        tagInput: editorState.tagInput,
      });
    }

    if (submitFlag && !editorState.inProgress) {
      history.replace(`/article/${editorState.article.slug}`);
    }
  }, [editorState, submitFlag, history]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    body: '',
    tagList: [],
    tagInput: '',
  });

  const changeDataHandler = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const watchForEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      props.onAddTag(formData);
      props.S_onAddTag(formData);
    }
  };

  // const removeTagHandler = (tag) => () => {
  //   props.onRemoveTag(tag);
  // };

  const submitForm = (ev) => {
    ev.preventDefault();

    const article = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      body: formData.body,
      tagList: formData.tagList,
    };

    const slug = { slug: props.articleSlug };
    setSubmitFlag(true);
    if (props.articleSlug) {
      props.onSubmit(agent.Articles.update(Object.assign(article, slug)));
      props.S_onSubmit(agent.Articles.update(Object.assign(article, slug)));
      return;
    }
    props.onSubmit(agent.Articles.create(article));
    props.S_onSubmit(agent.Articles.create(article));
  };

  return (
    !editorState.inProgress && (
      <div className={s.container}>
        <ListErrors errors={props.errors}></ListErrors>
        <h2 className={s.title}>Новая запись</h2>
        <form className={s.form} onSubmit={submitForm}>
          <fieldset className={s.form__item}>
            <input
              type="text"
              name="title"
              placeholder="Название записи"
              value={formData.title || ''}
              onChange={changeDataHandler}
              required
            />

            <input
              type="text"
              name="description"
              placeholder="О чём статья?"
              value={formData.description || ''}
              onChange={changeDataHandler}
            />

            <div className={s.image_input}>
              <input
                type="text"
                name="image"
                placeholder="URL изображения"
                value={formData.image || ''}
                onChange={changeDataHandler}
              />
              <button className={s.form__clip} disabled>
                <img src={clipImg} alt="Clip" />
              </button>
            </div>

            <textarea
              className="form-control"
              rows="8"
              name="body"
              placeholder="Текст записи"
              value={formData.body || ''}
              onChange={changeDataHandler}
              required></textarea>

            <div className={s.tags_generator}>
              <input
                type="text"
                name="tagInput"
                placeholder={
                  [].concat(formData.tagList).length > 2
                    ? 'Пасхалка, больше 3х нельзя'
                    : 'Теги (введите тег и нажмите enter)'
                }
                maxLength={10}
                value={formData.tagInput || ''}
                onChange={changeDataHandler}
                onKeyDown={watchForEnter}
                disabled={[].concat(formData.tagList).length > 2 ? true : false}
              />

              <Tags tags={formData.tagList} onClickTag={() => {}} type="dark" />
            </div>

            <Button className={s.form__button}>Опубликовать запись</Button>
          </fieldset>
        </form>
      </div>
    )
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
