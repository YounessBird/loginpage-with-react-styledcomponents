import React from "react";
import styled from "styled-components";
import StyledForm from "./Form.styled";
import Input from "../Input";
import Button from "../Buttons";
const Form = () => {
  return (
    <StyledForm>
      <h3>Sign Up</h3>
      <Input placeholder="Full Name" type={undefined} />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confrim Password" />
      <Button text="Sign Up" />
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </StyledForm>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;
export default Form;
