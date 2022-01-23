import { useThemeContext } from 'hooks/theme-selector';

import { Layout } from 'components/Layout';

function MainPage() {
  const { theme_context } = useThemeContext();
  return (
    <Layout title="Main Page">
      <span>{theme_context.color}</span>
    </Layout>
  );
}

export default MainPage;
