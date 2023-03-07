import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../providers/UserContext';

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to='/errorPage' />;
};

export default ProtectedRoute;
