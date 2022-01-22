import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { ThemeSelectorProvider } from 'context/theme-selector';

import theme from 'styles/theme';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeSelectorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeSelectorProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
