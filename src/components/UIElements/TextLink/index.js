import styled from "styled-components";

export const TextLink = styled.span`
  display: inline-block;
  transition: all  0.2s 0.1s ease-in-out;
  border-bottom: 1px solid white;
  color: #124;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f55;
    border-bottom: 1px solid currentColor;
  }
`;
