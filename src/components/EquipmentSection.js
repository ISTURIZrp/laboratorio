import React, { useState, useEffect } from 'react';
import { getEquipment } from '../utilities/api';
import LoadingSpinner from './LoadingSpinner';

const EquipmentSection = () => {
  const [equipment, setEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const data = await getEquipment();
        setEquipment(data);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEquipment();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container section">
      <h2>Equipment</h2>
      {equipment.length === 0 ? (
        <p>No equipment available</p>
      ) : (
        <ul>
          {equipment.map((item) => (
            <li key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Status: {item.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentSection;
