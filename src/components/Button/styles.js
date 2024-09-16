import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" 
      ? "none" 
      : "1px solid white"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #ffff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: ${props => props.theme === "primary" ? "0.8; scale: 1.1; transition: 0.4s" : "0.8; color: #fff; transition: 0.4s; scale: 1.1"};
  }

  &:active {
    opacity: ${props => props.theme === "primary" ? "0.5; transition: none" : "0.5; transition: none"};
  }
`;
