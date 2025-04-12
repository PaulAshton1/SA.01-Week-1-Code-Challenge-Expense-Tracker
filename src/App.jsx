import {useState} from 'react'
import ExpenseTable from './components/ExpenseTable'
import ExpenseFrom from './components/ExpenseForm'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
 const [expenses , setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return(
    <div>
    <h1>Expense Tracker</h1>
    <SearchBar search={search} onsearch={setSearch}/>
    <ExpenseFrom onAddExpense={handleAddExpense}/>
    <ExpenseTable expenses={filteredExpenses}/>
    </div>
  );
}

export default App
