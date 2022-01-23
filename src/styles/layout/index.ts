import { IconButton, Paper, styled } from '@mui/material';

export const CustomSpanMenu = styled('span')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .text-menu {
    color: ${({ theme }) => theme.palette.grey[500]};
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const CustomContainnerChildren = styled('div')`
  display: flex;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
  min-height: calc(100vh - 4rem);
  align-items: baseline;
  justify-content: center;
`;

export const CustomPaper = styled(Paper)`
  max-width: 1350px;
  width: 100%;
`;

export const CustomIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: transparent;

  &.show-color-black {
    width: 100%;
    color: ${({ theme }) => theme.palette.grey[700]};

    &:hover {
      background-color: transparent;
    }
  }
  &.show-color-white {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const CustomContentPage = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
`;
