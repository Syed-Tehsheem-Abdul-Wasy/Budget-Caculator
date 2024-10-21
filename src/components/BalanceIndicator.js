// src/components/BalanceIndicator.js
import React from 'react';

function BalanceIndicator({ balance }) {
  return (
    <div className="text-center my-4">
      <h3 className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {balance >= 0 ? 'You have a positive balance!' : 'Your balance is negative!'}
      </h3>
      <p className="text-xl">Current Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default BalanceIndicator;
