import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Extras from './Extras';

const Main = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Extras />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

export default Main;
