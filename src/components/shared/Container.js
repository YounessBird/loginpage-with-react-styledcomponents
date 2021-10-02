import styled from "styled-components";

export const Container = styled.div`
  background: #eefcff;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  background-image: url(${({ bgurl }) => bgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
`;
