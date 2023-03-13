import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import HousePage from '../pages/HousePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedRoute from './protectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/house' element={<HousePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='/dashboard' element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>

      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
