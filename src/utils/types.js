import PropTypes from 'prop-types';

const currentUserType = PropTypes.shape({
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
});

export default currentUserType;
