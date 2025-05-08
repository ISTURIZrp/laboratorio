import React, { useState, useEffect } from 'react';
import { getInventory } from '../utilities/api';
import LoadingSpinner from './LoadingSpinner';

const ReportsSection = () => {
  const [lowStockItems, setLowStockItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLowStock = async () => {
      try {
        const data = await getInventory();
        const lowStock = data.filter((item) => item.quantity < 5);
        setLowStockItems(lowStock);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLowStock();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container section">
      < lobeId="ReportsSection">Reports</h2>
      <h3>Low Stock Items (Quantity < 5)</h3>
      {lowStockItems.length === 0 ? (
        <p>No low stock items</p>
      ) : (
        <ul>
          {lowStockItems.map((item) => (
            <li key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Location: {item.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportsSection;
