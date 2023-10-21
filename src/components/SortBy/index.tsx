import { FormControl, MenuItem, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, memo } from 'react';
import { SortByProps } from './types';

const SortBy: FC<SortByProps> = ({ value, handleChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction='row' justifyContent='space-between'>
      <Typography variant={isMobile ? 'h6' : 'h4'} fontWeight={700}>
        Top 500 Movies
      </Typography>

      <Stack direction='row' alignItems='center' gap={3}>
        <Typography variant='subtitle1'>Order by</Typography>

        <FormControl variant='standard' size='small' sx={{ width: '70px' }}>
          <Select value={value} label='Age' onChange={handleChange}>
            <MenuItem value={'ASC'}>ASC</MenuItem>
            <MenuItem value={'DESC'}>DESC</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default memo(SortBy);
