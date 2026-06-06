import { Navigate, Outlet } from 'react-router';

import { isDev } from '@shared/config/env';

const AuthorizationLayout = () => {
  const token = localStorage.getItem('token');

  if (!token && !isDev) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthorizationLayout;
