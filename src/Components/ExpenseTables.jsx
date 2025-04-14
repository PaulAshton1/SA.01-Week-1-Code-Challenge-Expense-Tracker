import React from 'react';

function ExpenseTables({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  const total = expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0);

  return (
    <table className="expense-table">
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
            <td>${parseFloat(item.amount).toFixed(2)}</td>
            <td>{item.category}</td>
            <td>{new Date(item.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onDeleteExpense(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${total.toFixed(2)}</strong></td>
          <td colSpan="3"></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseTables;
