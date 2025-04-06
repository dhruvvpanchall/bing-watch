import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken, getAuthToken, logout as logoutAuth, isAuthenticated } from './auth'; // Import auth.js functions

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    name: null,
    email: null,
  });

  // Check the authentication status on component mount
  useEffect(() => {
    if (isAuthenticated()) {
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      setUser({
        isAuthenticated: true,
        name,
        email,
      });
    }
  }, []);

  // Login function (sets the auth token and user data in localStorage)
  const login = (name, email, token) => {
    setAuthToken(token); // Store token
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    setUser({
      isAuthenticated: true,
      name,
      email,
    });
  };

  // Logout function (clears the token and user data)
  const logout = () => {
    logoutAuth(); // Clear token using auth.js logout
    setUser({
      isAuthenticated: false,
      name: null,
      email: null,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
