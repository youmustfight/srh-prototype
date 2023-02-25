import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Widget } from "./Widget";

const App: React.FC = () => {
  return (
    <StrictMode>
      <Widget />
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
