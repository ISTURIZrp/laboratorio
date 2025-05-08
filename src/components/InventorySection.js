import React, { useState, useEffect } from 'react';
import InventoryItemCard from './InventoryItemCard';
import { getInventory, deleteInventoryItem } from '../utilities/api';
import LoadingSpinner from './LoadingSpinner';

const InventorySection = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getInventory();
        setItems(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteInventoryItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container section">
      <h2>Inventory</h2>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <div className="inventory-grid">
          {items.map((item) => (
            <InventoryItemCard key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InventorySection;
