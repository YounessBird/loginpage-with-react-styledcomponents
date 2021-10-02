import styled from "styled-components";

export const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  max-width: 350px;
  min-width: 250px;
  margin: 0.5rem 0;

  border: none;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;
