import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListErrors from '../common/ListErrors/ListErrors';
import agent from '../../agent';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../../constants/actionTypes';
import { transformApiErrors } from '../../utils/api-errors';
import { matchType } from '../../utils/types';

const mapStateToProps = (state) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: () => dispatch({ type: ADD_TAG }),
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: () => dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) => dispatch({ type: UPDATE_FIELD_EDITOR, key, value }),
});

class Editor extends React.Component {
  constructor(props) {
    super(props);

    const { onAddTag, onRemoveTag, onSubmit, onUpdateField } = this.props;
    const updateFieldEvent = (key) => (ev) => onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeBody = updateFieldEvent('body');
    this.changeTagInput = updateFieldEvent('tagInput');

    this.watchForEnter = (ev) => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        onAddTag();
      }
    };

    this.removeTagHandler = (tag) => () => {
      onRemoveTag(tag);
    };

    this.submitForm = (ev) => {
      ev.preventDefault();
      const { articleSlug, body, description, tagList, title } = this.props;
      const article = {
        title,
        description,
        body,
        tagList,
      };

      const slug = { slug: articleSlug };
      const promise = articleSlug
        ? agent.Articles.update(Object.assign(article, slug))
        : agent.Articles.create(article);

      onSubmit(promise);
    };
  }

  // eslint-disable-next-line react/no-deprecated,consistent-return
  componentWillMount() {
    const { match, onLoad } = this.props;
    if (match.params.slug) {
      return onLoad(agent.Articles.get(match.params.slug));
    }
    onLoad(null);
  }

  // eslint-disable-next-line react/no-deprecated,consistent-return
  componentWillReceiveProps(nextProps) {
    const { match, onLoad, onUnload } = this.props;
    if (match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        onUnload();
        return onLoad(agent.Articles.get(match.params.slug));
      }
      onLoad(null);
    }
  }

  componentWillUnmount() {
    const { onUnload } = this.props;
    onUnload();
  }

  render() {
    const { body, description, errors, inProgress, tagInput, tagList, title } = this.props;
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">

              <ListErrors errors={transformApiErrors(errors)} />

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Article Title"
                      value={title ?? ''}
                      onChange={this.changeTitle}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What's this article about?"
                      value={description ?? ''}
                      onChange={this.changeDescription}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      value={body ?? ''}
                      onChange={this.changeBody}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter tags"
                      value={tagInput ?? ''}
                      onChange={this.changeTagInput}
                      onKeyUp={this.watchForEnter}
                    />

                    <div className="tag-list">
                      {
                        (tagList || []).map((tag) => (
                          <span className="tag-default tag-pill" key={tag}>
                            <i
                              className="ion-close-round"
                              onClick={this.removeTagHandler(tag)}
                            />
                            {tag}
                          </span>
                        ))
                      }
                    </div>
                  </fieldset>

                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={inProgress}
                    onClick={this.submitForm}
                  >
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
}

Editor.propTypes = {
  articleSlug: PropTypes.string,
  body: PropTypes.string,
  description: PropTypes.string,
  errors: PropTypes.object,
  inProgress: PropTypes.bool,
  match: matchType.isRequired,
  tagInput: PropTypes.string,
  tagList: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onAddTag: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  articleSlug: null,
  body: null,
  description: null,
  errors: null,
  inProgress: false,
  tagInput: null,
  tagList: null,
  title: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
