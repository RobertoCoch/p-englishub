import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, allowedType }) => {
  const token = localStorage.getItem('token');
  const tipo = localStorage.getItem('tipo');

  if (!token) {
    return <Navigate to="/logina" />;
  }

  if (allowedType && tipo !== allowedType) {
    return <Navigate to="/logina" />;
  }

  return children;
};