import { ToastContainer } from 'react-toastify';

import { CssBaseline } from '@mui/material';

import 'react-toastify/dist/ReactToastify.css';
import Routes from 'routes';

function App() {
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
