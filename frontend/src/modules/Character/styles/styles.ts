import { createStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: '45em',
      margin: 'auto',
      backgroundColor: theme.palette.primary.light
    }
  })
