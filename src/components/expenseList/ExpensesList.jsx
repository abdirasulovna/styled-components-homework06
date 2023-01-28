import ExpenseItem from "../expenseItem/ExpenseItem";
// import "./ExpensesList.css";
import styled from "styled-components";

const Div = styled.ul`
  color: white;
  text-align: center;
`;

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h1 className="expenses-list__fallback">No Expense Found</h1>;
  }
  return (
    <Div>
      <ul className="expenses-list">
        {expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={index}
              expenseTitle={expense.title}
              expensePrice={expense.amount}
              expenseDate={expense.date}
            />
          );
        })}
      </ul>
    </Div>
  );
};

export default ExpensesList;
