import { createContext, ReactNode, useState } from 'react';

import {
  ThemeSelectorContextProps,
  ThemeProps,
} from 'types/theme_selector.context';

type ThemeSelectorProps = {
  children: ReactNode;
};

const ThemeSelectorContext = createContext({} as ThemeSelectorContextProps);

const ThemeSelectorProvider = ({ children }: ThemeSelectorProps) => {
  const [theme_context, set_theme_context] = useState<ThemeProps>({
    color: 'red',
  });

  const handleSetThemeContext = (color: ThemeProps) => {
    set_theme_context(color);
  };

  const shared = {
    theme_context,
    handleSetThemeContext,
  };

  return (
    <ThemeSelectorContext.Provider value={shared}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export { ThemeSelectorProvider, ThemeSelectorContext };
