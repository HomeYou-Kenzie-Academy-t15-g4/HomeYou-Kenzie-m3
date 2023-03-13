import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../providers/UserContext';

const ProtectedRoute = () => {
  const token = localStorage.getItem('@HomeYou:TOKEN');
  
  return token ? <Outlet /> : <Navigate to='/errorPage' />;
};

export default ProtectedRoute;
