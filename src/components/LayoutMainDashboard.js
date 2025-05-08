import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utilities/AuthContext';
import LayoutMainNav from './LayoutMainNav';
import LoadingSpinner from './LoadingSpinner';

const LayoutMainDashboard = () => {
  const { currentUser, isLoading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container">
      <LayoutMainNav logout={logout} />
      <main className="section">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMainDashboard;
