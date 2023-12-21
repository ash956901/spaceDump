import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter basename="https://ash956901.github.io/spaceDump/home" >
    <App  />
    <Toaster/>
  </BrowserRouter>
  
);
