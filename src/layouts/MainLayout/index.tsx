import React, { FC } from 'react';
import { MainLayoutProps } from './types';
import { Box } from '@mui/material';
import Header from '@/src/components/Header';
import Spotlight from '@/src/components/SpotLight';
import Footer from '@/src/components/Footer';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />

      <Box component='main' height='100%'>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
