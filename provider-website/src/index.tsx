import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ProviderSite } from "./ProviderSite";

const App: React.FC = () => {
  return (
    <StrictMode>
      <ProviderSite />
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
