import React from "react";
import styled from "styled-components";
import { StyledInput } from "./Input.styled";
import Status from "../Status";
const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Input;
