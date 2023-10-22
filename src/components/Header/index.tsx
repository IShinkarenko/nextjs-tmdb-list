import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, {FC, memo} from 'react';

import { StyledAppBar, StyledToolbar } from './styled';

const Header: FC = () => {
  return (
    <StyledAppBar position='absolute'>
      <StyledToolbar>
        <Image src='/logo.svg' width={150} height={50} alt='Picture of the author' />

        <Stack direction='row' gap={3}>
          <Typography variant='subtitle2'>Home</Typography>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};
export default memo(Header);