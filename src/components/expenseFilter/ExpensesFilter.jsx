// import './ExpensesFilter.css'
import styled from "styled-components"

const Div = styled.div`
  color: white;
  padding: 0 1rem;
`;
const ExpenseStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Select = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;
const ExpensesFilter = ({ selectedYear, onChangeSelectedYear }) => {
	return (
		<Div className='expenses-filter'>
			<ExpenseStyled className='expenses-filter__control'>
				<Label>Filter by year</Label>
				<Select value={selectedYear} onChange={onChangeSelectedYear}>
					<option value='All'>Select All</option>
					<option value='2025'>2025</option>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
				</Select>
			</ExpenseStyled>
		</Div>
	)
}

export default ExpensesFilter
