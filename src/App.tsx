import React from 'react';
import styled from 'styled-components';

import CssReset from './styles/Reset';
import GlobalStyle from './styles/Styles';
import device from './utils/breakpoints';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Wrapper>
      <CssReset />
      <GlobalStyle />
      <Header />
      <Main />
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

export default App;
