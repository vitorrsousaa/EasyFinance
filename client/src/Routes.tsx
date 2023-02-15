import { ReactElement } from 'react';
import { Routes as RoutesProvider, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Transactions from './pages/Transactions';

interface PrivateRouteProps {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticated, loading } = useAuthContext();

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        }
      />
    </RoutesProvider>
  );
}
