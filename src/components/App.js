import GlobalStyles from "./style/Global";
import { Container, Wrapper } from "./shared/Container";

import Sidebar from "./Sidebar";
import Main from "./Main";
import styled, { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import bg from "../assets/bg.png";
import { Flex } from "./shared/Flex";
import logo from "../assets/logo.svg";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Wrapper bgurl={bg}>
          <Sidebar logo={logo} />
          <Main />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
