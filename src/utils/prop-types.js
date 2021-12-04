import PropTypes from 'prop-types';

export const articlePropTypes = PropTypes.shape({
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    following: PropTypes.bool.isRequired,
  }),
  body: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  favorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  tagList: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
});

// Eslint ругается на единственный export
export const futureProps = '';
