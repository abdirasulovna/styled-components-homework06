import React from "react";
// import "./NewExpense.css";
import ExpenseForm from "../expenseForm/ExpenseForm";
import styled from "styled-components";

const Div = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Div >
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Div>
  );
}

export default NewExpense;
