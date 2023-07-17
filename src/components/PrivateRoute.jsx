import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
