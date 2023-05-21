import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 ul,
 ol {
   margin: 0;
   padding: 0;
 }

 ul {
   list-style: none;
 }

 img {
   display: block;
   max-width: 100%;
   height: auto;
 }
`;


