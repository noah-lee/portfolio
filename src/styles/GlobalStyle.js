import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  /* CSS Reset */

  /* http://meyerweb.com/eric/tools/css/reset/ 
  * v2.0 | 20110126
  * License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global Styles */

  :root {
    --color-aqua: #7eddd3;
    --color-red: #c46474;

    --color-white: #e3e6eb;
    --color-light: #54585c;
    --color-dark: #2d2e30;
    --color-black: #101010;

    /* --vs-code-background: #1e1e1e;
    --vs-code-blue: #569ccb;
    --vs-code-aqua: #408fbb;
    --vs-code-lavendar: #a586c0;
    --vs-code-tan: #ce7f50;
    --vs-code-lightblue: #68cefe; */
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-dark);
    color: var(--color-white);
  }
`;
