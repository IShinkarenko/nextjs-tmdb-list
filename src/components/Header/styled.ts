import { AppBar, Toolbar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  top: 32px;
  width: calc(100% - 64px);
  transform: translate(50%, 0);
  right: 50%;
  border-radius: 10px;
  background-color: transparent;
`;

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  padding: '0 32px',
  gap: 48,
  [theme.breakpoints.down('md')]: {
    padding: '0 14px',
  },
}));
