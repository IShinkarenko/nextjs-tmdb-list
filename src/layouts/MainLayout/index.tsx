import { Box } from '@mui/material';
import React, { FC } from 'react';

import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';

import { MainLayoutProps } from './types';

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