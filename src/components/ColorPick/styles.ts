import { styled, Button } from '@mui/material';

export const CustomButton = styled(Button)`
  background-color: ${({ className }) => className};

  &:hover {
    background-color: ${({ className }) => className};
  }
`;
