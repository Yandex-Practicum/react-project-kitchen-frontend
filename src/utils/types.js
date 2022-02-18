import PropTypes from 'prop-types';

export const matchType = PropTypes.shape({
  params: PropTypes.object.isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const authorType = PropTypes.shape({
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
});

export const articleType = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  favorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  author: authorType,
});
