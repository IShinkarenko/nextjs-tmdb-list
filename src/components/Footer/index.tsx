import { Box, Typography } from '@mui/material';
import React, { FC, memo } from 'react';

const Footer: FC = () => {
  return (
    <Box component='footer' p='7px 59px' bgcolor='#181818' mt={10}>
      <Typography variant='caption'>{`Copyright ${new Date().getFullYear()}`}</Typography>
    </Box>
  );
};

export default memo(Footer);