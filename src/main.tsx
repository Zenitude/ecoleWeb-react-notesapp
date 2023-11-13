import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ContextProvider from "./utils/context/context";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
