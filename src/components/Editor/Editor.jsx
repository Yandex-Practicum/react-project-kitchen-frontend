import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../common/Button/Button';
import DialogPage from '../common/DialogPage/DialogPage';
import Form from '../common/Form/Form';
import FormButtons from '../common/FormButtons/FormButtons';
import InputText from '../common/InputText/InputText';
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
    const {
      articleSlug,
      body,
      description,
      errors,
      inProgress,
      tagInput,
      tagList,
      title,
    } = this.props;
    return (
      <DialogPage title={articleSlug ? 'Редактирование записи' : 'Новая запись'}>
        <ListErrors errors={transformApiErrors(errors)} />

        <Form onSubmit={this.submitForm}>
          <InputText
            label="Заголовок"
            placeholder="Название статьи"
            value={title ?? ''}
            onChange={this.changeTitle}
          />
          <InputText
            label="Описание"
            placeholder="О чем статья"
            value={description ?? ''}
            onChange={this.changeDescription}
          />
          <InputText
            label="Содержание"
            placeholder="Текст статьи"
            value={body ?? ''}
            onChange={this.changeBody}
          />
          <InputText
            label="Теги"
            placeholder="Теги (через запятую)"
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

          <FormButtons>
            <Button
              title="Опубликовать"
              isActive={!inProgress}
            />
          </FormButtons>
        </Form>
      </DialogPage>
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
