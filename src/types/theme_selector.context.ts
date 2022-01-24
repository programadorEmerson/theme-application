export type ThemeSelectorContextProps = {
  theme_context: ThemeProps[] | null;
  themeSelected: ThemeProps | null;
  handleCreateNewTheme: ({ title }: { title: string }) => void;
  handleUpdateColor: (id: number, color: string, key: string) => void;
  handleSelectTheme: (position: number) => void;
  handleSetThemeContext: (theme: ThemeProps) => void;
};

export type ThemeProps = {
  id: number;
  name: string;
  [`background-color`]: string;
  [`primary-text-color`]: string;
  [`secondary-text-color`]: string;
  [`accent-color`]: string;
  selected?: boolean;
};
