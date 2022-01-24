import { Themes } from 'components/ChooseTheme';
import { Layout } from 'components/Layout';

function HomePage() {
  return (
    <Layout
      title="Selecionar Tema"
      showNewButton={true}
      textNewButton="Novo Tema"
    >
      <Themes />
    </Layout>
  );
}

export default HomePage;
