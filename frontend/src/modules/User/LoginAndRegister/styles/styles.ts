import { createStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: '45em',
      margin: 'auto',
      backgroundColor: theme.palette.primary.light
    },
    buttons: {
      margin: 'auto',
      color: theme.palette.text.primary,
      padding: '8px 10px'
    },
    form: {
      width: '20em',
      margin: 'auto'
    },
    checkbox: {
      paddingTop: '5px',
      color: theme.palette.text.primary
    },
    textField: {
      width: '100%',
      marginTop: '15px'
    }
  })
