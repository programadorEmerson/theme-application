import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { ThemeProps } from 'types/theme_selector.context';

import {
  CustomCard,
  CustomDescription,
  CustomLinks,
  CustomTitleText,
} from './styles';

type CardInformationProps = {
  icon: string;
  title: string;
  description: string;
  links: string[] | null;
};

export const CardInformation = ({
  icon,
  title,
  description,
  links,
}: CardInformationProps) => {
  const [userTheme, setUserTheme] = useState<ThemeProps | null>();

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme.app.selected');
    if (themeLocalStorage) {
      const themeSelected = JSON.parse(themeLocalStorage);
      setUserTheme(themeSelected);
    }
  }, []);
  return (
    <>
      {userTheme && (
        <>
          <CustomCard className={userTheme['accent-color']}>
            <Box>
              <img src={icon} alt="icon" />
            </Box>
            <CustomTitleText className={userTheme['secondary-text-color']}>
              {title}
            </CustomTitleText>
            <CustomDescription className={userTheme['primary-text-color']}>
              {description}
            </CustomDescription>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '1rem',
              }}
            >
              {links?.map(item => (
                <CustomLinks className={userTheme['accent-color']} key={item}>
                  {item}
                </CustomLinks>
              ))}
            </Box>
          </CustomCard>
        </>
      )}
    </>
  );
};
