import { Box, styled, Typography } from '@mui/material';

export const SpotlightContainer = styled(Box)(({ theme }) => ({
  height: '75vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '65px 32px 0',
  borderRadius: 10,
  width: 'calc(100% - 48px)',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  top: 24,
  background: 'linear-gradient(to right, #02181e, #043740)',
  [theme.breakpoints.down('md')]: {
    height: 550,
    padding: '0 14px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: '#fff',
  maxWidth: 850,
  fontWeight: 700,
  marginBottom: 20,
  fontSize: theme.typography.pxToRem(80),
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.pxToRem(70),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(40),
    maxWidth: 'unset',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(40),
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: '#fff',
  maxWidth: 850,
  fontSize: theme.typography.pxToRem(28),
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.pxToRem(30),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(20),
    maxWidth: 'unset',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(20),
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  right: 0,
  opacity: 0.3,
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 720,
    width: '100%',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 1,
  },
}));
