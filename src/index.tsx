import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
