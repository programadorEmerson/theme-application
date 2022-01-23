import { Layout } from 'components/Layout';

function HomePage() {
  return (
    <Layout
      title="Selecionar Tema"
      showNewButton={true}
      textNewButton="Novo Tema"
    >
      <h1>Theme Application</h1>
    </Layout>
  );
}

export default HomePage;
