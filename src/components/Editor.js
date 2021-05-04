import React, {useState, useEffect} from 'react';
import ListErrors from './ListErrors';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED })
});

function Editor(props) {
  const {onAddTag, onRemoveTag, onSubmit, onLoad, onUnload, match,
    articleSlug, errors, inProgress} = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tagList, setTagList] = useState([]);

  const changeTitle = function(ev) {
    setTitle(ev.target.value);
  };
  const changeDescription = function(ev) {
    setDescription(ev.target.value);
  };
  const changeBody = function(ev) {
    setBody(ev.target.value);
  };
  const changeTagInput = function(ev) {
    setTagInput(ev.target.value);
  };
  const watchForEnter = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      debugger;
      setTagList([...tagList, tagInput]);
    }
  };

  const removeTagHandler = tag => () => {
    onRemoveTag(tag);
  };

  const submitForm = ev => {
    ev.preventDefault();
    const article = {
      title,
      description,
      body,
      tagList
    };

    const slug = { slug: articleSlug };
    const promise = articleSlug ?
      agent.Articles.update(Object.assign(article, slug)) :
      agent.Articles.create(article);

    onSubmit(promise);
  };

  useEffect(() => {
    if (match.params.slug) {
      onLoad(agent.Articles.get(match.params.slug));
    }
    onLoad(null);
    return () => {
      onUnload();
    };
  }, [match]);

  useEffect(() => {
    setTitle(props.title || '');
    setDescription(props.description || '');
    setBody(props.body || '');
    setTagList(props.tagList || '');
  }, [props]);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">

            <ListErrors errors={errors}></ListErrors>

            <form>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={title}
                    onChange={changeTitle} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={changeDescription} />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={changeBody}>
                  </textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    value={tagInput}
                    onChange={changeTagInput}
                    onKeyUp={watchForEnter} />

                  <div className="tag-list">
                    {
                      (tagList || []).map(tag => {
                        return (
                          <span className="tag-default tag-pill" key={tag}>
                            <i  className="ion-close-round"
                                onClick={removeTagHandler(tag)}>
                            </i>
                            {tag}
                          </span>
                        );
                      })
                    }
                  </div>
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  disabled={inProgress}
                  onClick={submitForm}>
                  Publish Article
                </button>

              </fieldset>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
