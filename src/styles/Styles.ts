import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-aqua: #7eddd3;
    --color-red: #c46474;

    --color-white: #e3e6eb;
    --color-light: #99a1a8;
    --color-dark: #2d2e30;
    --color-black: #252728;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-dark);
    color: var(--color-white);
  }
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const P = styled.p`
  line-height: 2rem;
  color: var(--color-light);
`;

export const Section = styled.section`
  padding: 64px 0;
`;
