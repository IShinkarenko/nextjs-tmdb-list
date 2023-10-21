import { Box, Card, Rating, styled } from '@mui/material';

export const MovieCard = styled(Card)(() => ({
  backgroundColor: '#181818',
  color: '#fff',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  willChange: 'transform',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export const MovieImage = styled(Box)(() => ({
  position: 'relative',
  '& img': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
  },
}));

export const FavoriteToggle = styled(Rating)(() => ({
  position: 'absolute',
  right: '0',
  zIndex: 5,
  '& .MuiRating-iconEmpty': {
    color: '#fff',
  },
  '& .MuiRating-iconFilled': {
    color: '#2FBAD1',
  },
}));
