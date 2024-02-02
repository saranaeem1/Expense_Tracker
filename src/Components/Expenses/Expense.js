import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredByYearHandler = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilteredChangeYear={filteredChangeHandler}
      />
      <ExpenseChart expenses={filteredByYearHandler} />
      <ExpenseList onFilteredByYear={filteredByYearHandler} />
    </Card>
  );
};

export default Expense;
