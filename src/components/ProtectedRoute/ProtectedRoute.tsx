import React, { FC } from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

const ProtectedRoute: FC<RouteProps> = ({ children, ...props }) => {
  const location = useLocation();
  return (
    <Route
      {...props}
      render={() =>
        localStorage.getItem('jwt') ? children : <Redirect to={{ pathname: '/login', state: location }} />
      }
    />
  );
};

export default ProtectedRoute;
