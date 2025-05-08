import React, { createContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem, removeStorageItem } from './storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = () => {
    const user = getStorageItem('currentUser');
    setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    loadUser();
    const handleStorageChange = (event) => {
      if (event.key === 'currentUser') loadUser();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (userData) => {
    setStorageItem('currentUser', userData);
    setCurrentUser(userData);
  };

  const logout = () => {
    removeStorageItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
