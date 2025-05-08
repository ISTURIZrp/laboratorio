import React, { useState, useEffect } from 'react';
import { getTransactions } from '../utilities/api';
import LoadingSpinner from './LoadingSpinner';

const TransactionsSection = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container section">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions available</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="card">
              <h3>{transaction.itemName}</h3>
              <p>Type: {transaction.type}</p>
              <p>Quantity: {transaction.quantity}</p>
              <p>Date: {transaction.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionsSection;
