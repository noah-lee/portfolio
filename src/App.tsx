import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Extras from './components/Extras';
import Footer from './components/Footer';

import device from './utils/breakpoints';

const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Extras />
        <Contact />
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 320px;
  max-width: 1280px;
  padding: 0 64px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    padding: 0 32px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const Main = styled.main`
  width: 100%;
`;

export default App;
