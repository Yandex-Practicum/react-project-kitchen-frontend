import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';
import { useEffect, useMemo, useState } from 'react';

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
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

export const Editor = (props) => {

  const [state, setState] = useState({ title: null, description: null, body: null, tags: null })

  const onChangeTitle = (e) => {
    setState({ ...state, title: e.target.value })
  }

  const onChangeDescription = (e) => {
    setState({ ...state, description: e.target.value })
  }

  const onChangeBody = (e) => {
    setState({ ...state, body: e.target.value })
  }

  const onChangeTags = (e) => {
    setState({ ...state, tags: e.target.value })
  }

  const watchForEnter = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      props.onAddTag();
    }
  };

  const removeTagHandler = tag => () => {
    props.onRemoveTag(tag);
  };

  const submitForm = ev => {
    ev.preventDefault();
    const article = {
      title: state.title,
      description: state.description,
      body: state.body,
      tagList: state.tagList
    };

    const slug = { slug: props.articleSlug };
    const promise = props.articleSlug ?
      agent.Articles.update(Object.assign(article, slug)) :
      agent.Articles.create(article);

    props.onSubmit(promise);
  };

  useEffect(() => {

    if (props.match.params.slug) {
      return props.onLoad(agent.Articles.get(props.match.params.slug));
    }
    props.onLoad(null);

    return () => {
      props.onUnload()
    }
  }, [props.match.params.slug])

  useMemo(() => {
    props.onUnload();
    return props.onLoad(agent.Articles.get(props.match.params.slug));
  }, [props.match.params.slug])


  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">

            <ListErrors errors={props.errors}></ListErrors>

            <form>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={state.title}
                    onChange={onChangeTitle} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={state.description}
                    onChange={onChangeDescription} />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={state.body}
                    onChange={onChangeBody}>
                  </textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    value={state.tagInput}
                    onChange={onChangeTags}
                    onKeyUp={watchForEnter} />

                  <div className="tag-list">
                    {
                      (props.tagList || []).map(tag => {
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
                  disabled={props.inProgress}
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
