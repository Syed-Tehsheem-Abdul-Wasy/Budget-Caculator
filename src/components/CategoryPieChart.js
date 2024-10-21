// src/components/CategoryPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryPieChart({ transactions }) {
  const categories = transactions.reduce((acc, transaction) => {
    if (acc[transaction.category]) {
      acc[transaction.category] += transaction.amount;
    } else {
      acc[transaction.category] = transaction.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ['#4CAF50', '#FF5733', '#33C4FF', '#FFC300', '#DAF7A6', '#FF33A1'],
        hoverBackgroundColor: ['#45A049', '#FF4500', '#1E90FF', '#FFD700', '#ADFF2F', '#FF1493'],
      },
    ],
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Category Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}

export default CategoryPieChart;
