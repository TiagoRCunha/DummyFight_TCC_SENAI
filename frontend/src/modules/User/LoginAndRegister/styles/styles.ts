import { createStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: '45em',
      margin: 'auto',
      backgroundColor: theme.palette.primary.light,
      '& *': {
        color: theme.palette.text.primary
      }
    },
    buttons: {
      margin: 'auto',
      color: theme.palette.text.primary,
      padding: '8px 10px'
    },
    form: {
      width: '20em',
      margin: 'auto',
      '& .MuiInput-underline:before': {
        borderBottomColor: theme.palette.text.secondary
      },
      '& .Mui-focused': {
        color: theme.palette.text.primary
      }
    },
    checkbox: {
      paddingTop: '5px'
    },
    textField: {
      width: '100%',
      marginTop: '15px'
    }
  })
