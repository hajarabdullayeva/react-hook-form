import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.buttonColor || "white"};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em;

  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &: hover {
    background: palevioletred;
    color: white;
  }
`;

// import styled, { css } from "styled-components";
//   ${(props) =>
//     props.primary &&
//     css`
//       background: red;
//       white: yellow;
//     `}
