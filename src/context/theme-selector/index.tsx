/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { api } from 'services/api';

import {
  ThemeSelectorContextProps,
  ThemeProps,
} from 'types/theme_selector.context';

// import { company } from 'faker';

type ThemeSelectorProps = {
  children: ReactNode;
};

type NewThemeProps = {
  title: string;
};

const ThemeSelectorContext = createContext({} as ThemeSelectorContextProps);

const ThemeSelectorProvider = ({ children }: ThemeSelectorProps) => {
  const [themeSelected, setThemeSelected] = useState<ThemeProps | null>(null);
  const [theme_context, set_theme_context] = useState<ThemeProps[] | null>([]);

  // Cria um novo tema
  const handleCreateNewTheme = ({ title = 'Untitled' }: NewThemeProps) => {
    const newId = theme_context?.length ? theme_context?.length : 0;
    const new_theme = {
      id: newId,
      name: title,
      'background-color': generate_color_hex(),
      'primary-text-color': generate_color_hex(),
      'secondary-text-color': generate_color_hex(),
      'accent-color': generate_color_hex(),
      selected: true,
    };
    if (theme_context) {
      const newThemeList = [...theme_context, new_theme];
      const newId = newThemeList.length;
      postTheme(newId, new_theme);
      set_theme_context(
        newThemeList.map(theme => {
          if (theme.id === newId - 1) {
            updateTheme(theme.id, theme);
            localStorage.setItem('theme.app.selected', JSON.stringify(theme));
            return theme;
          } else {
            const updatedtheme = { ...theme, selected: false };
            updateTheme(theme.id, updatedtheme);
            localStorage.setItem(
              'theme.app.selected',
              JSON.stringify(updatedtheme)
            );
            return updatedtheme;
          }
        })
      );
    } else {
      postTheme(0, new_theme);
      set_theme_context([new_theme]);
      localStorage.setItem('theme.app.selected', JSON.stringify(new_theme));
    }
  };

  // Recupera os temas iniciais do projeto (Mock)
  const getInitialThemes = async () => {
    try {
      const { data }: { data: ThemeProps[] } = await api.get('/themes');
      set_theme_context(data);
      localStorage.setItem('theme.app.selected', JSON.stringify(data[0]));
    } catch (error) {
      console.log('erro', error);
      return null;
    }
  };

  // Recupera os temas iniciais do projeto (Mock)
  const getAllThemes = async (themeLocalStorage: string) => {
    const themeSelected = JSON.parse(themeLocalStorage);
    updateTheme(themeSelected.id, themeSelected);
    try {
      const { data }: { data: ThemeProps[] } = await api.get('/themes');

      const newThemeList = data.map(theme => {
        if (theme.id === themeSelected.id) {
          return { ...theme, selected: true };
        } else {
          return { ...theme, selected: false };
        }
      });
      set_theme_context(newThemeList);
    } catch (error) {
      console.log('erro', error);
      return null;
    }
  };

  const updateTheme = async (id: number, theme: ThemeProps) => {
    try {
      const { data }: { data: ThemeProps } = await api.patch(
        `/themes/${id}`,
        theme
      );
      console.log(data);
    } catch (error) {
      return null;
    }
  };

  const postTheme = async (id: number, theme: ThemeProps) => {
    try {
      const { data }: { data: ThemeProps[] } = await api.post(
        `/themes/`,
        theme
      );
      console.log('Tema postado: ', data);
    } catch (error) {
      return null;
    }
  };

  // Atualizar cor
  const handleUpdateColor = useCallback(
    (id: number, color: string, key: string) => {
      if (!theme_context) return;
      const new_theme_context = theme_context?.map((theme: ThemeProps) => {
        if (theme.id === id) {
          const themeLocalStorage = localStorage.getItem('theme.app.selected');
          const newPalette = {
            ...theme,
            [`${key}`]: color,
          };

          // Verifica se o tema em alteração é o tema selecionado e o atualiza no localStorage
          if (themeLocalStorage) {
            const themeSelected = JSON.parse(themeLocalStorage);
            if (themeSelected.id === id) {
              localStorage.setItem(
                'theme.app.selected',
                JSON.stringify(newPalette)
              );
              updateTheme(newPalette.id, newPalette);
            }
          }
          return newPalette;
        }
        return theme;
      });
      set_theme_context(new_theme_context);
    },
    [theme_context]
  );

  // Gerador de cores hexadecimal
  const generate_color_hex = () => {
    return (
      '#' +
      Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0')
    );
  };

  // Gerador de mock de temas
  // const theme_array_generator = useCallback(
  //   (quantity: number): ThemeProps[] => {
  //     let id = 0;
  //     return Array.from({ length: quantity }, () => {
  //       const theme = {
  //         id,
  //         name: company.companyName(),
  //         'background-color': generate_color_hex(),
  //         'primary-text-color': generate_color_hex(),
  //         'secondary-text-color': generate_color_hex(),
  //         'accent-color': generate_color_hex(),
  //         selected: false,
  //       };
  //       id += 1;
  //       return theme;
  //     });
  //   },
  //   []
  // );

  // Insere novos temas no projeto
  const handleSetThemeContext = (color: ThemeProps) => {
    if (!theme_context) {
      set_theme_context([color]);
    } else {
      set_theme_context([...theme_context, color]);
    }
  };

  // Seleciona o tema escolhido e seta no LocalStorage
  const handleSelectTheme = (position: number) => {
    const newListTheme = theme_context?.map((theme, index) => {
      if (theme.id === position) {
        const newTheme = { ...theme, selected: true };
        updateTheme(position, newTheme);
        setThemeSelected(newTheme);
        localStorage.setItem('theme.app.selected', JSON.stringify(newTheme));
        return newTheme;
      } else {
        updateTheme(index, { ...theme, selected: false });
        return { ...theme, selected: false };
      }
    });
    if (newListTheme) {
      set_theme_context(newListTheme);
    }
  };

  // Se houver o tema salvo no localStorage, é selecionado e mock atualizado com as informações
  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme.app.selected');
    if (themeLocalStorage) {
      getAllThemes(themeLocalStorage);
    } else {
      getInitialThemes();
    }
  }, []);

  const shared = {
    theme_context,
    themeSelected,
    handleCreateNewTheme,
    handleUpdateColor,
    handleSelectTheme,
    handleSetThemeContext,
  };

  return (
    <ThemeSelectorContext.Provider value={shared}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export { ThemeSelectorProvider, ThemeSelectorContext };
