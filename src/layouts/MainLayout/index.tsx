import React, { FC } from 'react';
import { MainLayoutProps } from './types';
import { Box } from '@mui/material';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
