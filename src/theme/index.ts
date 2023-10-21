import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [inter],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderBottom: '1px solid #fff',
          outline: 'none',
          '& svg': {
            color: '#fff',
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-selected': {
            backgroundColor: '#181818',
          },
        },
      },
    },
  },
});

export default theme;
