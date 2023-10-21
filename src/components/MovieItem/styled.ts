import { AppBar, Box, Card, Rating, Toolbar, Typography, styled } from '@mui/material';

export const MovieCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#181818',
  color: '#fff',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export const MovieImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& img': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
  },
}));

export const FavoriteToggle = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty': {
    color: '#fff',
  },
  '& .MuiRating-iconFilled': {
    color: '#2FBAD1',
  },
}));
