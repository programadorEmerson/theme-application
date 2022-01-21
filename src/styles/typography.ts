import { createTheme } from '@mui/material/styles';

const typography = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.188rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.563rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.875rem',
    },
  },
});

export default typography;
