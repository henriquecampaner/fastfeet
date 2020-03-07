import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

// import 'react-perfect-scrollbar/dist/css/styles.css';

// import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;

    /* this defines what 1rem is (1/10) */
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color:#444;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
