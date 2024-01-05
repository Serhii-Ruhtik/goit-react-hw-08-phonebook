import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

import { refreshCurrentUser } from '../../redux/user/operations';
import { selectIsRefreshing } from '../../redux/user/selectors';

import { PublicRoute } from '../../components/PublicRoute';
import { PrivateRoute } from '../../components/PrivateRoute';

import SharedLayout from '../SharedLayout/SharedLayout';

import css from '../App/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));
const Home = lazy(() => import('../../pages/Home/Home'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.section}>
      {isRefreshing ? (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute component={<Register />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <ToastContainer />
    </div>
  );
};
export default App;
