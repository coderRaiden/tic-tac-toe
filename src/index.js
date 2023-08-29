//import.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//Link with root.

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//Display content.

root.render(<App />);
