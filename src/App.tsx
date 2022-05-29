import { FC } from "react";

import GlobalStyle from "./styles/GlobalStyle";

import HeaderWrapper from './components/Header';
import Hero from './components/Hero';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderWrapper />
      <Hero />
    </>
  );
};

export default App;
