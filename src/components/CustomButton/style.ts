import { styled, Button } from '@mui/material';

export const CustomButtonOutlined = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  width: 12rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  &:disabled:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }

  &.Mui-disabled {
    opacity: 0.45;
    cursor: not-allowed;
    pointer-events: all;
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
