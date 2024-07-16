import React from "react";
// import ReactDOM from "react-dom"; // $ Deprecated from React 18

import App from "./App";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<App />, document.getElementById("root")); // $ Deprecated from React 18

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
