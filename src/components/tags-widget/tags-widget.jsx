import React from 'react';
import PropTypes from 'prop-types';
import TagsContainer from '../tags-container/tags-container';
import tagsStyle from './tags-widget.module.css';

const TagsWidget = ({ tags, onClickTag }) => (
  <section className={tagsStyle.container}>
    <div className={tagsStyle.sidebar}>
      <p className={tagsStyle.title}>Популярные теги</p>
      <TagsContainer tags={tags} onClickTag={onClickTag} />
    </div>
  </section>
);

export default TagsWidget;

TagsWidget.defaultProps = {
  tags: [],
};

TagsWidget.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClickTag: PropTypes.func.isRequired,
};
