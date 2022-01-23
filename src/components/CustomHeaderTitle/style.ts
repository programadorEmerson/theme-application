import { Box, styled } from '@mui/material';

export const CustomHeader = styled(Box)`
  display: flex;
  width: 100%;
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.main};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .left-content {
    .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .route {
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
