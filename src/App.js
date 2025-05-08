import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utilities/AuthContext';
import AuthLoginForm from './components/AuthLoginForm';
import LayoutMainDashboard from './components/LayoutMainDashboard';
import InventorySection from './components/InventorySection';
import EquipmentSection from './components/EquipmentSection';
import EquipmentMonitoringSection from './components/EquipmentMonitoringSection';
import TransactionsSection from './components/TransactionsSection';
import ReportsSection from './components/ReportsSection';
import EntriesSection from './components/EntriesSection';
import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLoginForm />} />
          <Route path="/" element={<LayoutMainDashboard />}>
            <Route index element={<InventorySection />} />
            <Route path="equipment" element={<EquipmentSection />} />
            <Route path="monitoring" element={<EquipmentMonitoringSection />} />
            <Route path="transactions" element={<TransactionsSection />} />
            <Route path="reports" element={<ReportsSection />} />
            <Route path="entries" element={<EntriesSection />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
