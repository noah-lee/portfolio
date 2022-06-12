import React from 'react';
import styled from 'styled-components';

import { H1 } from '../styles/StyledComponents';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <H1>noah lee</H1>
      </Left>
      <Right>
        {/* <p>Links</p>
        <p>Links</p>
        <p>Links</p> */}
      </Right>
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

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  gap: 32px;
`;

export default Header;
