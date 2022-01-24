import { Themes } from 'components/ChooseTheme';
import { Layout } from 'components/Layout';

function HomePage() {
  return (
    <Layout
      title="Selecionar tema, para alterar editar a cor, clique sobre ela ou adicione novos no botão novo tema"
      showNewButton={true}
      textNewButton="Novo Tema"
    >
      <Themes />
    </Layout>
  );
}

export default HomePage;
