import React from "react";
import { StyledLogo } from "./Logo.styled";
const Logo = ({ logo }) => {
  return (
    <StyledLogo>
      <img src={logo} />
      <h3>
        Dev <span>Codes</span>
      </h3>
    </StyledLogo>
  );
};
export default Logo;
