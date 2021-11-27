import React from 'react';
import PropTypes from 'prop-types';
import agent from '../../agent';
import tagsStyle from './tags.module.css';

const Tags = (props) => {
  const [isActive, setActive] = React.useState(null);
  const { tags } = props;
  return (
    <section className={tagsStyle.container}>
      <div className={tagsStyle.sidebar}>
        <p className={tagsStyle.title}>Популярные теги</p>
        {tags.length > 0 ? (
          <div className={tagsStyle.tagList}>
            {tags.map((tag) => {
              const handleClick = (ev) => {
                ev.preventDefault();
                props.onClickTag(
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
        ) : null}
      </div>
    </section>
  );
};

export default Tags;

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClickTag: PropTypes.func.isRequired,
};
