import { FC } from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from './components/AboutMe';

const App: FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
        <AboutMe />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1080px;
  padding: 0 16px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
`;

export default App;
