import { createMuiTheme, ThemeOptions } from '@material-ui/core'

const mixing: ThemeOptions = {
  overrides: {
    MuiFab: {
      label: {
        color: '#F7F8F9'
      },
      extended: {
        width: '180px'
      }
    },
    MuiTypography: {
      h2: {
        fontFamily: 'auto'
      }
    }
  }
}

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#7F9FD2'
    },
    secondary: {
      light: '#6a4f4b',
      main: '#3e2723',
      dark: '#1b0000'
    },
    warning: {
      main: '#FFEAAF'
    },
    background: {
      paper: '#aeaeae',
      default: '#e0e0e0'
    },
    type: 'dark'
  },
  overrides: mixing.overrides
})

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#c1d5e0',
      main: '#90a4ae',
      dark: '#62757f',
      contrastText: '#6b8da2'
    },
    secondary: {
      main: '#bdbdbd',
      light: '#efefef',
      dark: '#8d8d8d'
    },
    warning: {
      main: '#FFEAAF'
    },
    type: 'light'
  },
  overrides: mixing.overrides
})
