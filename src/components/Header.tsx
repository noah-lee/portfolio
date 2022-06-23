import React from 'react';
import styled from 'styled-components';

import { H1 } from '../styles/Styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Start>
        <H1>noah lee</H1>
      </Start>
      <End>
        {/* <p>Links</p>
        <p>Links</p>
        <p>Links</p> */}
      </End>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 96px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Start = styled.div``;

const End = styled.div`
  display: flex;
  gap: 32px;
`;

export default Header;
