import PropTypes from 'prop-types';
import React from 'react';
import TagsRow from '../TagsRow/TagsRow';
import Tag from '../Tag/Tag';
import popularTagsStyles from './PopularTags.module.css';

const PopularTags = ({ tags, onClickTag }) => (
  <div className={popularTagsStyles.container}>
    <p className={popularTagsStyles.title}>Популярные теги</p>
    {tags ? (
      <TagsRow align="right">
        <Tag text="Теги:" white />
        {tags.map((tag) => (
          <Tag key={tag} text={tag} onClick={onClickTag} />
        ))}
      </TagsRow>
    ) : (
      <p className={popularTagsStyles.title}>Загрузка тегов...</p>
    )}
  </div>
);

PopularTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClickTag: PropTypes.func.isRequired,
};

PopularTags.defaultProps = {
  tags: null,
};

export default PopularTags;
