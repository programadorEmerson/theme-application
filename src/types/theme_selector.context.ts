export type ThemeSelectorContextProps = {
  theme_context: ThemeProps;
  handleSetThemeContext: (theme: ThemeProps) => void;
};

export type ThemeProps = {
  color: 'red' | 'blue' | 'green' | 'yellow';
};
