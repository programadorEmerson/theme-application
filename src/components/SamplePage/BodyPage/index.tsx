import { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';

import { CardInformation } from 'components/CardInformation';

import { ThemeProps } from 'types/theme_selector.context';

import {
  CustomDestakSubTitleText,
  CustomSubTitleText,
  CustomTitleText,
} from './styles';

export const BodyPage: React.FC = () => {
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
            }}
          >
            <CustomTitleText className={userTheme['accent-color']}>
              how
            </CustomTitleText>
            <CustomSubTitleText className={userTheme['primary-text-color']}>
              Como levamos{' '}
              <CustomDestakSubTitleText className={userTheme['accent-color']}>
                tecnologia e transformação digital
              </CustomDestakSubTitleText>{' '}
              aos nossos clientes
            </CustomSubTitleText>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardInformation
                  icon="https://bravi.com.br/app/uploads/2020/04/icone-bravi-inception.png"
                  title="APLICAÇÕES MOBILE"
                  description="Aplicativos iOS e Android pensados da melhor maneira para evoluir o seu negócio com confiança, segurança, performance e escalabilidade."
                  links={[
                    'Personas',
                    'Jornadas do usuário',
                    'Idealização de funcionalidades',
                    'Sequenciamento de MVPs',
                    'Prototipação',
                    'AnaliseTécnica',
                    'Arquitetura da solução ideal',
                  ]}
                />
              </Grid>
              <Grid item xs={6}>
                <CardInformation
                  icon="https://bravi.com.br/app/uploads/2020/04/icone-app.png"
                  title="BRAVI INCEPTION"
                  description="Elaboramos uma metodologia que combina as melhores práticas de Design, User Experience e Agile Development para entregar soluções digitais de alto impacto."
                  links={[
                    'Aplicações nativas',
                    'Aplicações hibridas',
                    'Progressive Web Apps',
                    'Sequenciamento de MVPs',
                    'Nativo multiplataforma',
                  ]}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
