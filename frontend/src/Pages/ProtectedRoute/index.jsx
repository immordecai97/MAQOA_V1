import React from 'react';
import { Navigate } from 'react-router-dom';

// Suponiendo que tienes un contexto o una forma de verificar si el usuario está autenticado
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
