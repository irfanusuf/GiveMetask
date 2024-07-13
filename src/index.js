import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/global.scss'

const targetDiv = ReactDOM.createRoot(document.getElementById("root"));

targetDiv.render(<App />);
