import {useState}from 'react'

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
   description: '',
    amount: '',
    category: ''
  });

function handleChange(event){
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    })
}

function handleSubmit(event) {
    event.preventDefault();
    onAddExpense(formData);
    setFormData({
        description: '',
        amount: '',
        category: ''
    });
}

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
        />
        <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
        />
        <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
        />
        <button type="submit">Add Expense</button>
    </form>
);
}

export default ExpenseForm