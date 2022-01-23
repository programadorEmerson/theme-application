import React from 'react';

import { ButtonProps } from '@mui/material';

import { CustomButtonOutlined } from './style';

export const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <CustomButtonOutlined {...props}>{children}</CustomButtonOutlined>;
};
