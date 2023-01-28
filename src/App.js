import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Туалетная бумага",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Зарядник",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={newExpenses} />
    </div>
  );
}

export default App;
