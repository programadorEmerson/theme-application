import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import theme from 'styles/theme';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
