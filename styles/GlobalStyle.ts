import {createGlobalStyle} from 'styled-components';

/* tslint:disable */
export default createGlobalStyle`
  @font-face {
    font-family: 'Futura';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Futura.ttc') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 100;
    src: url('/fonts/HGGGothicssi_00G.ttf') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 200;
    src: url('/fonts/HGGGothicssi_20G.ttf') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 400;
    src: url('/fonts/HGGGothicssi_40G.ttf') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 600;
    src: url('/fonts/HGGGothicssi_60G.ttf') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 800;
    src: url('/fonts/HGGGothicssi_80G.ttf') format('truetype');
  }
  @font-face {
    font-family: 'HGGGothicssi';
    font-weight: 900;
    src: url('/fonts/HGGGothicssi_99G.ttf') format('truetype');
  }
    
  html, body {
    height: 100%;
    letter-spacing: -0.012em;
    font-family: HGGGothicssi, sans-serif;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
  }
  
  #__next {
    width: 100%;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    outline: none;
  }
  
  h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  html {
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }
  
  a:link,
  a:active,
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
    line-height: 0;
    font-size: 75%;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }

  img {
    display: block;
    border-style: none;
    width: 100%;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0; /* 2 */
    line-height: 1.15; /* 1 */
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 9999s ease-in-out 0s;
  }

  legend {
    box-sizing: border-box; /* 1 */
    display: table; /* 1 */
    padding: 0; /* 3 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
    color: inherit; /* 2 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;