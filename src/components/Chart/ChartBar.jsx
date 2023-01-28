
import styled from "styled-components";

const ChartStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InnerChartStyled = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const FilterStyled = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const LabelStyled = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = ({ maxValue, label, value }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <ChartStyled>
      <InnerChartStyled>
        <FilterStyled style={{ height: barFillHeight }}></FilterStyled>
      </InnerChartStyled>
      <LabelStyled>{label}</LabelStyled>
    </ChartStyled>
  );
};

export default ChartBar;
