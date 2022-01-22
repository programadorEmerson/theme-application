/* eslint-disable react-hooks/rules-of-hooks */
import useMediaQuery from '@mui/material/useMediaQuery';

export const isMobile = () => {
  return useMediaQuery('(max-width:799px)');
};
