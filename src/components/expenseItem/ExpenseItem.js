import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../UI/Card";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;
const StyledDescription = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  color: #fff;
  margin-left: 20px;
`;
const TextStyled = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  color: white;
`;
const Price = styled.div`
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
`;
function ExpenseItem(props) {
  return (
    <CardStyled>
      <Card>
         <StyledDescription>
        <ExpenseDate date={props.expenseDate} />
          <TextStyled>{props.expenseTitle}</TextStyled>
          <Price>${props.expensePrice}</Price>
        </StyledDescription>
      </Card>
     </CardStyled>
  );
}

export default ExpenseItem;
