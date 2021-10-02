import styled from "styled-components";

export const StyledSidebar = styled.div`
  padding: 0 3rem;
  min-width: 400px;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(35px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
  }
  span {
    color: #ff8d8d;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;
