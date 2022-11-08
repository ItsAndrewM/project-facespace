import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {UsersProvider} from "./components/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
