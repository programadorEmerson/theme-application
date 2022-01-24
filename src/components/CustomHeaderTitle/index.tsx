/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { useThemeContext } from 'hooks/theme-selector';

import CreateNewTheme from 'components/ChooseTheme/Theme/NewTheme';

import { ThemeProps } from 'types/theme_selector.context';

import { CustomHeader } from './style';

type CustomHeaderTitleProps = {
  title: string;
  textButton?: string;
  routeNew?: string;
  showNewButton?: boolean;
};

export const CustomHeaderTitle: React.FC<CustomHeaderTitleProps> = ({
  title,
  textButton = '',
  showNewButton = false,
}) => {
  const [userTheme, setUserTheme] = useState<ThemeProps | null>();
  const { theme_context } = useThemeContext();
  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme.app.selected');
    if (themeLocalStorage) {
      const themeSelected = JSON.parse(themeLocalStorage);
      setUserTheme(themeSelected);
    }
  }, [theme_context]);
  return (
    <>
      {userTheme && (
        <CustomHeader>
          <span style={{ color: userTheme['accent-color'] }} className="title">
            {title}
          </span>
          {showNewButton && (
            <CreateNewTheme>
              <span
                style={{ padding: '0.3rem', color: userTheme['accent-color'] }}
              >
                {textButton}
              </span>
            </CreateNewTheme>
          )}
        </CustomHeader>
      )}
    </>
  );
};
