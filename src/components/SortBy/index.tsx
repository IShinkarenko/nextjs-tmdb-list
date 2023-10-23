import { FormControl, MenuItem, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, memo } from 'react';

import { ASC_ORDER, DESC_ORDER } from '@/src/constant/common-constants';

import { SortByProps } from './types';

const SortBy: FC<SortByProps> = ({ value, isSortingDisabled, handleChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between' gap={3}>
      <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={700}>
        Top 500 Movies
      </Typography>

      <Stack direction='row' alignItems='center' gap={3}>
        <Typography variant='subtitle1'>Order by</Typography>

        <FormControl variant='standard' size='small' sx={{ width: '70px' }} disabled={isSortingDisabled}>
          <Select value={value} onChange={handleChange}>
            <MenuItem value={ASC_ORDER}>{ASC_ORDER}</MenuItem>
            <MenuItem value={DESC_ORDER}>{DESC_ORDER}</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default memo(SortBy);
