import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "./context/Store";



const targetDiv = ReactDOM.createRoot(document.getElementById("root"));

targetDiv.render(


<Provider>
 <App />  
</Provider>
   
  
  
);
