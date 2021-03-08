import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-size: 16px;
  font-family: Arial;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  outline: none;
  min-height: 150px;
  margin-top: 8px;

  &:focus {
    border: 1px solid #f55;
  }
`;
