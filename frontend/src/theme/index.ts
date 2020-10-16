import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: {
      light: '#23CEF5',
      main: '#242F66',
      dark: '#192459',
      contrastText: '#7F9FD2'
    },
    secondary: {
      main: '#23CEF5'
    },
    warning: {
      main: '#FFEAAF'
    }
  },
  overrides: {
    MuiFab: {
      label: {
        color: '#F7F8F9'
      },
      extended: {
        width: '180px'
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#E8EAF2'
      }
    },
    MuiTableCell: {
      head: {
        fontSize: '1rem',
        fontWeight: 'bold'
      }
    }
  }
})
