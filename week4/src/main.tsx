import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
