import { useContext } from 'react';

import { ThemeSelectorContext } from 'context/theme-selector';

import { ThemeSelectorContextProps } from 'types/theme_selector.context';

const useThemeContext = (): ThemeSelectorContextProps => {
  return useContext(ThemeSelectorContext);
};

export { useThemeContext };
