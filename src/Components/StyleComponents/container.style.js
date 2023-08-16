import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  color: black;
  padding: 10px;
  text-align: left;
  font-size: large;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  gap: 10px;

  p {
    color: orange;
    letter-spacing: 3px;
    border: 1px solid white;
    padding: 30px;

    &:hover {
      background-color: burlywood;
      color: ${(props) => props.theme.color.secondry};
    }
  }
`;
export default Container;
