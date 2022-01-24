import { styled, Grid, Box } from '@mui/material';

export const CustomGridTitle = styled(Grid)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const CustomGridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CustomGridItemDetails = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomGridTextRow = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CustomGridColorDetailRow = styled(Grid)`
  .CustomGridColorDetailRow {
    width: 100%;
    height: 1rem;
  }
`;

export const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
