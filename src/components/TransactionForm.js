// src/components/TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      type,
      amount: parseFloat(amount),
      category,
      description,
    };
    addTransaction(transaction);
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-4">
        <div>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="border p-1">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-1"
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-1"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-1"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
