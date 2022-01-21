import { createTheme } from '@mui/material/styles';

const palette = createTheme({
  palette: {
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      light: '#ba68c8',
      main: '#9c27b0',
      dark: '#7b1fa2',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
    },
    grey: {
      50: '#fbf0f2',
      100: '#dcd8d9',
      200: '#C4C4C4',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#282626',
      900: '#150a0d',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      default: '#F6F6F6',
    },
  },
});

export default palette;
