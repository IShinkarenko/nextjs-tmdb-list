import * as React from 'react';
import { StyledAppBar, StyledToolbar } from './styled';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';

const Header = () => {
  return (
    <StyledAppBar position='absolute'>
      <StyledToolbar>
        <Image src='/logo.svg' width={150} height={50} alt='Picture of the author' />

        <Stack direction='row' gap={3}>
          <Typography variant='subtitle2'>Home</Typography>
          <Typography variant='subtitle2'>Top 500 movies</Typography>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};
export default Header;
