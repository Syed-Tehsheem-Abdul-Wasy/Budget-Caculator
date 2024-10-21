// src/App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import Overview from './components/Overview';
import CategoryPieChart from './components/CategoryPieChart';
import TransactionList from './components/TransactionList';
import BalanceIndicator from './components/BalanceIndicator';  // Import the BalanceIndicator

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Calculate the balance (income - expenses)
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Interactive Budget Calculator</h1>
      <Overview transactions={transactions} />
      <BalanceIndicator balance={balance} /> {/* Add the BalanceIndicator component */}
      <TransactionForm addTransaction={addTransaction} />
      <CategoryPieChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;

