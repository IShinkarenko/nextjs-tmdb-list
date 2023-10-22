import { Box, Card, CardContent, Rating, styled, Typography } from '@mui/material';
import { common } from '@mui/material/colors';

export const MovieCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#181818',
  color: common.white,
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  willChange: 'transform',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export const MovieImage = styled(Box)(() => ({
  position: 'relative',
  minHeight: ' 100px',
  minWidth: '200px',
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
  top: '0',
  zIndex: 5,
  '& .MuiRating-iconEmpty': {
    color: common.white,
  },
  '& .MuiRating-iconFilled': {
    color: '#2FBAD1',
  },
}));

export const MovieTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-wrap: balance;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
