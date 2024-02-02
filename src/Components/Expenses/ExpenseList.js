import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList = (props) => {
  if (props.onFilteredByYear.length === 0) {
    return <h2 className='expenseHeading'>No Expense Found</h2>;
  }
  return (
    <ul>
      {props.onFilteredByYear.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
