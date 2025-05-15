import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/logina" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isValid = payload.exp * 1000 > Date.now();
    return isValid ? children : <Navigate to="/logina" replace />;
  } catch (e) {
    return <Navigate to="/logina" replace />;
  }
};