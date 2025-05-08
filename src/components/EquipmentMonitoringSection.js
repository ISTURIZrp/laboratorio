import React, { useState, useEffect } from 'react';
import { getEquipmentMetrics } from '../utilities/api';
import LoadingSpinner from './LoadingSpinner';

const EquipmentMonitoringSection = () => {
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await getEquipmentMetrics();
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching equipment metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container section">
      <h2>Equipment Monitoring</h2>
      {metrics.length === 0 ? (
        <p>No metrics available</p>
      ) : (
        <ul>
          {metrics.map((metric) => (
            <li key={metric.id} className="card">
              <h3>{metric.equipmentName}</h3>
              <p>Status: {metric.status}</p>
              <p>Last Maintenance: {metric.lastMaintenance}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentMonitoringSection;
