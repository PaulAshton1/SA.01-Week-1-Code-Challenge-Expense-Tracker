import { useState } from "react";
import ExpenseTables from "./Components/ExpenseTables.jsx";
import ExpenseForm from "./Components/ExpenseForm";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header.jsx";
import SideBar from "./Components/SideBar.jsx";
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }
   
  function handleDeleteExpense(id) {
  const updatedExpenses = expenses.filter(exp => exp.id !== id);
  setExpenses(updatedExpenses);
}


  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar search={search} onSearch={setSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTables expenses={filteredExpenses}
      onDeleteExpense={handleDeleteExpense} />
    </div>

  );
 
  
}

export default App;



