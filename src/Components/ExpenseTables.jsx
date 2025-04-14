import React from 'react';

function ExpenseTables({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount}</td>
            <td>{item.category}</td>
            <td>{new Date(item.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onDeleteExpense(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTables;
