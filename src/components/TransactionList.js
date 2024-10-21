// src/components/TransactionList.js
import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Transaction History</h2>
      <ul className="space-y-2">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 rounded ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span>{transaction.description}</span>
            <span>{transaction.category}</span>
            <span>${transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
