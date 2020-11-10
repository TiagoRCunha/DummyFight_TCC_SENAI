import { createStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.dark,
      maxHeight: '70px'
    },
    mainContainer: {
      width: '100%',
      backgroundColor: theme.palette.grey[500],
      boxSizing: 'border-box',
      display: 'flex',
      minHeight: '40vh',
      '& > div': {
        margin: '8em auto',
        maxWidth: '900px'
      }
    },
    footer: {
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
      minHeight: '40vh',
      bottom: 0
    },
    gridContainer: {
      flexGrow: 1,
      margin: 0,
      width: '100%',
      '& h5': theme.typography.h5
    }
  })
