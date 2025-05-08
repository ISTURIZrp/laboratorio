import React, { useState } from 'react';
import { addInventoryItem } from '../utilities/api';

const EntriesSection = () => {
  const [entry, setEntry] = useState({ name: '', quantity: '', location: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        ...entry,
        id: Date.now().toString(),
        quantity: parseInt(entry.quantity),
      };
      await addInventoryItem(newItem);
      setEntry({ name: '', quantity: '', location: '' });
      alert('Item added successfully');
    } catch (err) {
      setError('Error adding item');
    }
  };

  return (
    <div className="container section">
      <h2>New Inventory Entry</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={entry.name}
            onChange={handleChange}
            placeholder="Item name"
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
.min="1"
            name="quantity"
            value={entry.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
          />
        </div>
        <div>
          <label>Location</label>
           <select
            name="location"
            value={entry.location}
            onChange={handleChange}
            required
          >
            <option value="">Select location</option>
            <option value="Lab 1">Lab 1</option>
            <option value="Lab 2">Lab 2</option>
            <option value="Storage">Storage</option>
          </select>
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default EntriesSection;
