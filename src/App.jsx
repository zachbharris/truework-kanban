import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Routes from "./routes";
import { gray, primary } from "theme/colors";

function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <>
        <Typeography />
        <BrowserRouter children={<Routes />} />
      </>
    </ThemeProvider>
  );
}

const Typeography = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${gray[90]};
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: 500;
  }

  h1, .h1 {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
  }
  h2, .h2 {
    font-size: 2.25rem;
  }
  h3, .h3 {
    font-size: 2rem;
  }
  h4, .h4 {
    font-size: 1.75rem;
    letter-spacing: 0.25px;
  }
  h5, .h5 {
    font-size: 1.5rem;
  }
  h6, .h6 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.15px;
  }
  p {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  .subtitle {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  p, .subtitle {
    line-height: 1.5rem;
  }
  .caption {
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1rem;
    letter-spacing: 0.4px;
  }
  .overline {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: uppercase;
  }
  label, .label {
    font-size: 0.875rem;
    font-weight: 600;
  }
  button {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  a {
    color: ${primary};
    font-size: inherit;
    font-weight: 500;
    line-height: auto;
    letter-spacing: 0.75px;
  }
  label, .subtitle, .overline {
    letter-spacing: 1.5px;
  }
`;

export default App;
