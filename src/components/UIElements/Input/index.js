import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-size: 16px;
  font-family: Arial;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  outline: none;
  margin-top: 8px;

  &:focus {
    border: 1px solid #f55;
  }
`;
