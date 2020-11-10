import { createStyles, Theme } from '@material-ui/core/styles'
import borderRococoImage from '../../../assets/boder-rococo-example.png'
// import teste from '../../../assets/testedoteste3.png'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.light
    },
    header: {
      padding: '25px',
      backgroundSize: 'contain',
      backgroundImage: `url(${borderRococoImage})`,
      backgroundRepeat: 'round',
      backgroundColor: 'inherit',
      backgroundBlendMode: 'multiply',
      transform: 'scaleY(-1)'
    },
    footer: {
      padding: '25px',
      backgroundSize: 'contain',
      backgroundImage: `url(${borderRococoImage})`,
      backgroundRepeat: 'round',
      backgroundColor: 'inherit',
      backgroundBlendMode: 'multiply'
    },
    body: {
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      color: theme.palette.text.primary
    }
  })
