import { FC } from 'react';

import { FormGroup } from '@mui/material';

import { useThemeContext } from 'hooks/theme-selector';

import { CustomBox } from './styles';
import { themeItem } from './Theme';

export const Themes: FC = () => {
  const { theme_context } = useThemeContext();

  return (
    <FormGroup>
      <CustomBox>
        {theme_context?.map(theme => {
          return themeItem({ theme });
        })}
      </CustomBox>
    </FormGroup>
  );
};
