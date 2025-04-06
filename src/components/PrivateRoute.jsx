import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null to represent loading state
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    console.log("JWT Token: ", authToken); // Add this line for debugging
    setIsAuthenticated(!!authToken);
    if (!authToken) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);
  

  // Show nothing until authentication status is determined
  if (isAuthenticated === null) {
    return null; // Prevent render during state check
  }

  // Redirecting or rendering the protected component
  return isAuthenticated ? element : null;
};

export default PrivateRoute;
