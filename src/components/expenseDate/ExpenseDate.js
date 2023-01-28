import styled from "styled-components";

const DataStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.6rem;
  height: 5.6rem;
  margin: 10px;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const MonthStyled = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;
const YearStyled = styled.div`
  font-size: 0.75rem;
`;
const DayStyled = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <DataStyled className="expense-date">
      <MonthStyled className="expense-date__month">{month}</MonthStyled>
      <YearStyled className="expense-date__year">{year}</YearStyled>
      <DayStyled className="expense-date__day">{day}</DayStyled>
    </DataStyled>
  );
}

export default ExpenseDate;
