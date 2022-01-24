import { styled } from '@mui/material';

export const CustomCard = styled('span')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
  padding: 1rem;
  margin-top: 2.5rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({ className }) => className};
  }
`;

export const CustomTitleText = styled('span')`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ className }) => className};
  margin: 1rem 0;
`;

export const CustomDescription = styled('span')`
  font-size: 1rem;
  font-weight: normal;
  color: ${({ className }) => className};
  margin: 0.5rem 0;
`;

export const CustomLinks = styled('span')`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey[400]};
  margin: 0 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ className }) => className};
    cursor: pointer;
  }
`;
