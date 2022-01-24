import { useEffect, useState } from 'react';

import { Layout } from 'components/Layout';
import { BodyPage } from 'components/SamplePage/BodyPage';
import { Header } from 'components/SamplePage/Header/Index';

import { CustomMainPage } from 'styles/pages/MainPage';

import { ThemeProps } from 'types/theme_selector.context';

function MainPage() {
  const [userTheme, setUserTheme] = useState<ThemeProps | null>();

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme.app.selected');
    if (themeLocalStorage) {
      const themeSelected = JSON.parse(themeLocalStorage);
      setUserTheme(themeSelected);
    }
  }, []);
  return (
    <Layout title="Sample Page">
      <>
        {userTheme && (
          <CustomMainPage className={userTheme['background-color']}>
            <Header />
            <BodyPage />
          </CustomMainPage>
        )}
      </>
    </Layout>
  );
}

export default MainPage;
