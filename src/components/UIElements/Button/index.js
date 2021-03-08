import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  color: white;
  border-radius: 2px;
  background: #f55;
  padding: 8px 24px;
  line-height 1.5;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  transition: all 0.2s 0.1s;
  
  &:hover {
    background: #d33;
  }
`;