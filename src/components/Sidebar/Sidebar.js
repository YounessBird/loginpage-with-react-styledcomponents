import React from "react";
import Logo from "../Logo";
import { StyledSidebar } from "./Sidebar.styled";
import Form from "../Form";

const Sidebar = ({ logo }) => {
  return (
    <StyledSidebar>
      <Logo logo={logo} />
      <Form />
    </StyledSidebar>
  );
};
export default Sidebar;
