import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Layout } from 'components/Layout';
import { NotFound } from './NotFound';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/Home/Home'));

const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const RegisterPage = lazy(() => import('pages/Register/Register'));

const LoginPage = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : null;
};
