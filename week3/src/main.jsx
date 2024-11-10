import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./style/global";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={GlobalStyle}/>
    <App/>
  </StrictMode>,
)
