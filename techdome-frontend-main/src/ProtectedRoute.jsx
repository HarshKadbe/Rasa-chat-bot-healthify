
import { useContext } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { LoginContext } from './Layout.jsx';

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to the /Login page, but save the current location they were
    // trying to go to when they were redirected.
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return <Outlet />; // Render the child routes if the user is logged in
};

export default ProtectedRoute;
