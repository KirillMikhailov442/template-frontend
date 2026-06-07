import { Navigate, Outlet } from 'react-router';

const AuthorizationLayout = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthorizationLayout;
