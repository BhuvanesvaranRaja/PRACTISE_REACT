import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline"
      ? "black"
      : props.variant === "elseif"
      ? "blue"
      : "green"};
  color: ${(props) =>
    props.variant === "outline"
      ? "white"
      : props.variant === "elseif"
      ? "white"
      : "blue"};
  border: ${(props) =>
    props.variant === "outline"
      ? "1px solid black"
      : props.variant === "elseif"
      ? "1px solid white"
      : "1px solid gold"};
  padding: 10px;
  margin: 20px;
`;
export default StyledButton;

export const GetStarted = styled(StyledButton)`
  background-image: linear-gradient(red, yellow, blue);
  color: black;
  text-decoration: none;
  font-weight: bolder;
  &:hover {
    filter: brightness(80%);
  }
`;

// submit
export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background-color: ghostwhite;
  color: violet;
  cursor: pointer;
  &:hover {
    background-color: violet;
    color: ghostwhite;
  }
`;
// Themeprovider

export const ThemeProviderComp = styled(StyledButton)`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.secondry};
  font-size: ${(props) => props.theme.color.size};
`;
