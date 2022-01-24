import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import { ThemeProps } from 'types/theme_selector.context';

import {
  CustomButton,
  CustomGridAsideLeft,
  CustomHeader,
  CustomImg,
  CustomTextDestak,
} from './styles';

export const Header: React.FC = () => {
  const [userTheme, setUserTheme] = useState<ThemeProps | null>();
  const linkImg =
    'https://bravi.com.br/app/uploads/2020/04/Seque%CC%82ncia-01_10-1.gif';

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
        <CustomHeader>
          <Grid container spacing={0}>
            <CustomGridAsideLeft item xs={6}>
              <span className="message-aside">
                A Bravi{' '}
                <CustomTextDestak className={userTheme['accent-color']}>
                  ajuda empresas a aprender
                </CustomTextDestak>{' '}
                rápido.
              </span>
              <CustomButton
                className={userTheme['accent-color']}
                variant="contained"
              >
                Conheça nossos cases
              </CustomButton>
            </CustomGridAsideLeft>
            <Grid item xs={6}>
              <CustomImg src={linkImg} />
            </Grid>
          </Grid>
        </CustomHeader>
      )}
    </>
  );
};
