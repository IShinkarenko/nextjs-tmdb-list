import MainLayout from '../layouts/MainLayout';
import TopList from '../containers/TopList';

const IndexPage = () => {
  return <TopList />;
};

IndexPage.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default IndexPage;
