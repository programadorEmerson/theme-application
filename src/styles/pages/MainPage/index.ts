import { Box, styled } from '@mui/material';

export const CustomMainPage = styled(Box)`
  width: 100%;
  max-width: 1330px;
  min-height: 180vh;
  background-color: ${({ className }) => className};
`;
