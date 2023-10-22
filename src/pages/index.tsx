import TopList from '../containers/TopList';
import MainLayout from '../layouts/MainLayout';

const IndexPage = () => {
  return <TopList />;
};

IndexPage.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default IndexPage;
