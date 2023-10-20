import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';

const IndexPage = () => {
  return <div>indwewedewdewex</div>;
};

IndexPage.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default IndexPage;
