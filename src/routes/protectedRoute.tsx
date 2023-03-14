import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const token = localStorage.getItem('@HomeYou:TOKEN');

  return token ? <Outlet /> : <Navigate to='/errorPage' />;
};

export default ProtectedRoute;
