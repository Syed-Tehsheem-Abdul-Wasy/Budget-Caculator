// src/components/Overview.js
import React from 'react';

function Overview({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="mb-6 text-center">
      <h2 className="text-xl font-bold">Financial Overview</h2>
      <div className="flex justify-center space-x-8 mt-4">
        <div>
          <h3 className="text-green-600">Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-red-600">Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div>
          <h3 className={`font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            Balance
          </h3>
          <p>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
