import PropTypes from 'prop-types';

const currentUserType = PropTypes.shape({
  username: PropTypes.string,
  email: PropTypes.string,
  token: PropTypes.string,
});

export default currentUserType;
