import React from "react";
import styled from "styled-components";
import { WehkampLogo } from "./WehkampLogo";

export const Header = () => (
  <HeaderComponent>
    <StyledWehkampLogo />
  </HeaderComponent>
);

const HeaderComponent = styled.header`
  border-top: 3px solid #f55;
  position: fixed;
  top: 0;
  left: 0
  right: 0;
  height: 80px;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  transform: translateZ(0);
  background: white;
  z-index: 10;
  width: 100vw;
`;

const StyledWehkampLogo = styled(WehkampLogo)`
    margin: 16px;
`