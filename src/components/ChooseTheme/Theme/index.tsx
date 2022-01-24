/* eslint-disable react-hooks/rules-of-hooks */
import { FormControlLabel, Grid, Paper, Switch } from '@mui/material';

import { useThemeContext } from 'hooks/theme-selector';

import ColorPick from 'components/ColorPick';
import PreviewTheme from 'components/PreviewTheme';

import { ThemeProps } from 'types/theme_selector.context';

import {
  CustomGridColorDetailRow,
  CustomGridItem,
  CustomGridItemDetails,
  CustomGridTextRow,
  CustomGridTitle,
} from '../styles';

type ThemeItem = { theme: ThemeProps };

export const themeItem = ({ theme }: ThemeItem) => {
  const { handleSelectTheme } = useThemeContext();
  const checked = theme.selected;
  return (
    <Paper
      elevation={3}
      sx={{ width: '280px', display: 'flex', margin: '0.3rem' }}
    >
      <Grid container>
        <CustomGridTitle item xs>
          {theme.name}
        </CustomGridTitle>
        <CustomGridItem item xs={12}>
          <CustomGridItemDetails container spacing={3}>
            <CustomGridTextRow item xs={7}>
              <span>Cor de fundo</span>
            </CustomGridTextRow>
            <CustomGridColorDetailRow item xs={4}>
              <ColorPick
                color={theme['background-color']}
                idTheme={theme.id}
                keyTheme="background-color"
              />
            </CustomGridColorDetailRow>
          </CustomGridItemDetails>
          <CustomGridItemDetails container spacing={3}>
            <CustomGridTextRow item xs={7}>
              <span>Cor texto primário</span>
            </CustomGridTextRow>
            <CustomGridColorDetailRow item xs={4}>
              <ColorPick
                color={theme['primary-text-color']}
                idTheme={theme.id}
                keyTheme="primary-text-color"
              />
            </CustomGridColorDetailRow>
          </CustomGridItemDetails>
          <CustomGridItemDetails container spacing={3}>
            <CustomGridTextRow item xs={7}>
              <span>Cor texto secundária</span>
            </CustomGridTextRow>
            <CustomGridColorDetailRow item xs={4}>
              <ColorPick
                color={theme['secondary-text-color']}
                idTheme={theme.id}
                keyTheme="secondary-text-color"
              />
            </CustomGridColorDetailRow>
          </CustomGridItemDetails>
          <CustomGridItemDetails container spacing={3}>
            <CustomGridTextRow item xs={7}>
              <span>Cor de destaque</span>
            </CustomGridTextRow>
            <CustomGridColorDetailRow item xs={4}>
              <ColorPick
                color={theme['accent-color']}
                idTheme={theme.id}
                keyTheme="accent-color"
              />
            </CustomGridColorDetailRow>
          </CustomGridItemDetails>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              sx={{ padding: '0.6rem' }}
              control={
                <Switch
                  checked={checked}
                  onChange={() => handleSelectTheme(theme.id)}
                />
              }
              label={checked ? 'Ativado' : 'Desativado'}
            />
            <PreviewTheme theme={theme}>
              <span>Preview</span>
            </PreviewTheme>
          </div>
        </CustomGridItem>
      </Grid>
    </Paper>
  );
};
