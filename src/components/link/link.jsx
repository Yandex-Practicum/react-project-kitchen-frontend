import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterDomLink} from 'react-router-dom';
import {LinkWrapper} from './style';

function Link({to, children}) {  
  return (
    <LinkWrapper>
      <RouterDomLink to={to}>{children}</RouterDomLink>
    </LinkWrapper>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Link;