// import "./Expenses.css";
import ExpensesFilter from "../expenseFilter/ExpensesFilter";
import ExpensesList from "../expenseList/ExpensesList";
import { useState } from "react";
import ExpensesChart from "../expensesChart/ExpensesChart";
import styled from "styled-components";

const CardItem = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("All");

  const selectChangeHandler = ({ target: { value } }) => {
    setSelectedYear(value);
  };
  const getCurrentExpenses = () => {
    if (selectedYear === "All") {
      return expenses;
    }
    return expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
  };
  const renderedExpenses = getCurrentExpenses();

  return (
    <CardItem className="expenses">
      <ExpensesChart expenses={renderedExpenses} />
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeSelectedYear={selectChangeHandler}
      />
      <ExpensesList expenses={renderedExpenses} />
    </CardItem>
  );
}

export default Expenses;
