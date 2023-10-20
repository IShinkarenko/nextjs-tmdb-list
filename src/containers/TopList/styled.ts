import { AppBar, Box, Card, Rating, Toolbar, Typography, styled } from '@mui/material';

export const MoviesListContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '24px',
  marginTop: '50px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const MovieCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#181818',
  color: '#fff',
}));

export const MovieImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '170px',
}));

export const FavoriteToggle = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty': {
    color: '#fff',
  },
  '& .MuiRating-iconFilled': {
    color: '#2FBAD1',
  },
}));
