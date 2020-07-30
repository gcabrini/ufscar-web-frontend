import React from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "relay-hooks";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";

import environment from "./relay/environment";
import { theme } from "./theme";

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
