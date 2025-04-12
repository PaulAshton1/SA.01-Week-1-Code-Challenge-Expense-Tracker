import React from 'react'

function ExpenseTable({ expenses }) {
  return (
   <table>
        <thead>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {expenses.map((item, index) => (
            <tr key={index}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            </tr>
        ))}
        </tbody>
   </table>
  )
}

export default ExpenseTable