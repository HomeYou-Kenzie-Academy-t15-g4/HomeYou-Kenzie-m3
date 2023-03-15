import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import HousePage from '../pages/HousePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { HousesProvider } from '../providers/HousesContext';
import { ModalsProvider } from '../providers/ModalsContext';
import { UserProvider } from '../providers/UserContext';
import ProtectedRoute from './protectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserProvider>
            <HousesProvider>
              <HomePage />
            </HousesProvider>
          </UserProvider>
        }
      />
      <Route
        path='/house'
        element={
          <UserProvider>
            <HousesProvider>
              <ModalsProvider>
                <HousePage />
              </ModalsProvider>
            </HousesProvider>
          </UserProvider>
        }
      />
      <Route
        path='/login'
        element={
          <UserProvider>
            <LoginPage />
          </UserProvider>
        }
      />
      <Route
        path='/register'
        element={
          <UserProvider>
            <RegisterPage />
          </UserProvider>
        }
      />

      <Route
        path='/dashboard'
        element={
          <UserProvider>
            <HousesProvider>
              <ModalsProvider>
                <ProtectedRoute />
              </ModalsProvider>
            </HousesProvider>
          </UserProvider>
        }
      >
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>

      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
