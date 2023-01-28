// import "./Card.css";
import styled from "styled-components";
const Div = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%
`;

const Card = (props)=> {
  return <Div>{props.children}</Div>;
}
export default Card;
