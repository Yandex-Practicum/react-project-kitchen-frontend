import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const matchType = PropTypes.shape({
  params: PropTypes.object.isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
