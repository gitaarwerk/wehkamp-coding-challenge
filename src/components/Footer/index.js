import React from "react";
import styled from "styled-components";

export const Footer = () => <StyledFooter>A footer</StyledFooter>;

const StyledFooter = styled.footer`
  background: black;
  color: white;
  padding: 16px;
  position: relative;
  bottom: 0;
  height: 150px;
  width: 100%;
`;
