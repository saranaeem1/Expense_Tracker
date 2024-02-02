import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

import "./App.css";

const dummyExpenses = [
  { id: 0, title: "Laptop", amount: 500, date: new Date(2020, 2, 25) },
  { id: 1, title: "Purse", amount: 30, date: new Date(2021, 5, 13) },
  { id: 2, title: "Pizza", amount: 5, date: new Date(2022, 12, 3) },
  { id: 2, title: "Shirt", amount: 5, date: new Date(2024, 1, 15) },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const getExpenseDataHandler = (data) => {
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onGetExpenseData={getExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
