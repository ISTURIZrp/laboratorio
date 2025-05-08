import React from 'react';

const InventoryItemCard = ({ item, onDelete }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Location: {item.location}</p>
      <button className="danger" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default InventoryItemCard;
