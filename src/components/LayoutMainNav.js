import React from 'react';
import { Link } from 'react-router-dom';

const LayoutMainNav = ({ logout }) => {
  return (
    <nav className="nav">
      <Link to="/">Inventory</Link>
      <Link to="/equipment">Equipment</Link>
      <Link to="/monitoring">Monitoring</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/entries">Entries</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default LayoutMainNav;
