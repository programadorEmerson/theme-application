/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { FaLayerGroup } from 'react-icons/fa';

import { CustomButton } from 'components/CustomButton';

import { CustomHeader } from './style';

type CustomHeaderTitleProps = {
  title: string;
  textButton?: string;
  routeNew?: string;
  showNewButton?: boolean;
};

export const CustomHeaderTitle: React.FC<CustomHeaderTitleProps> = ({
  title,
  routeNew = '',
  textButton = '',
  showNewButton = false,
}) => {
  return (
    <CustomHeader>
      <span className="title">{title}</span>
      {showNewButton && (
        <CustomButton
          className="right-content"
          onClick={() => window.location.replace(routeNew)}
        >
          <FaLayerGroup />
          <span style={{ padding: '0.3rem', marginLeft: '1rem' }}>
            {textButton}
          </span>
        </CustomButton>
      )}
    </CustomHeader>
  );
};
