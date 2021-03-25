import { StrictMode } from "react";
import ReactDOM from "react-dom";

import List from "./List";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <List />
  </StrictMode>,
  rootElement
);
