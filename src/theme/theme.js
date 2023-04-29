import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E352F',
    },
    secondary: {
      main: '#F6A95F',
    },
    link: {
      main: '#585DEC',
    },
    danger: {
      main: '#D50000',
    },
    light: {
      main: '#FEF6F0',
    }
  },
  typography: {
    fontSize: 16,
    lineHeight: 22,
    h1: {
      fontSize: '30px',
      lineHeight: '41px',
      fontWeight: 800,
      fontFamily: 'Manrope',
    },
    h2: {
      fontSize: '24px',
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        maxWidth: '1440px',
      },
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  breakpoints: {
    values: {
      xs: 0, // extra-small breakpoint
      sm: 600, // small breakpoint
      md: 992, // medium breakpoint
      lg: 1440, // large breakpoint
      xl: 1920, // extra-large breakpoint
    },
  },
});

export default theme;

