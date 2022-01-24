import { Box, Button, Grid, styled } from '@mui/material';

export const CustomHeader = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.common.black};
`;

export const CustomGridAsideLeft = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding-left: 2rem;
  .message-aside {
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: bold;
    font-size: 5rem;
    /* line-height: 1.2; */
  }
`;

export const CustomTextDestak = styled('span')`
  color: ${({ className }) => className};
  font-weight: bold;
  font-size: 5rem;
  line-height: 1.2;
`;

export const CustomButton = styled(Button)`
  background-color: ${({ className }) => className};
  width: 16rem;
  height: 4rem;
  border-radius: 50px;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

export const CustomImg = styled('img')`
  width: 100%;
`;
