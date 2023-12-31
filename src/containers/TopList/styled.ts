import { Box, styled } from '@mui/material';

export const MoviesListContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '24px',
  marginTop: '50px',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 420px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const MoviesSection = styled(Box)(() => ({
  marginTop: '100px',
  padding: '0 24px',
}));
