import React from 'react';
import PropTypes from 'prop-types';
import agent from '../../agent';
import tagsStyle from './tagsContainer.module.css';

const TagsContainer = ({ tags, onClickTag }) => {
  const [isActive, setActive] = React.useState(null);
  return tags.length > 0 ? (
    <div className={tagsStyle.tagList}>
      {tags.map((tag) => {
        const handleClick = (ev) => {
          ev.preventDefault();
          onClickTag(
            tag,
            (page) => agent.Articles.byTag(tag, page),
            agent.Articles.byTag(tag),
          );
          setActive(tag);
        };
        return (
          <button
            type="button"
            href=""
            value={tag}
            className={
              isActive === tag ? tagsStyle.buttonActive : tagsStyle.button
            }
            key={tag}
            onClick={handleClick}
          >
            {tag}
          </button>
        );
      })}
    </div>
  ) : null;
};

export default TagsContainer;

TagsContainer.defaultProps = {
  tags: [],
};

TagsContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClickTag: PropTypes.func.isRequired,
};
