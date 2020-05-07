import { createMuiTheme } from '@material-ui/core/styles';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#DDDDE0', //gray
      main: '#278FF0', //bright blue
    },
    secondary: {
      light: '#7ED0F0', //light blue
      main: '#3860ae', //main blue 
      dark: '#182340', //dark blue
    },
    warning: {
      main: '#c38734',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#46976c',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    // fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: rawTheme.palette.text.primary,
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;