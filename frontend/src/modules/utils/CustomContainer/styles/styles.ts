import { createStyles, Theme } from '@material-ui/core/styles'
import borderRococoImage from '../../../assets/boder-rococo-example.png'
// import teste from '../../../assets/testedoteste3.png'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
      // borderImage: `url(${teste}) 40% 42% / 1 round `
    },
    header: {
      padding: '25px',
      backgroundSize: 'contain',
      backgroundColor: theme.palette.primary.light,
      backgroundImage: `url(${borderRococoImage})`,
      backgroundRepeat: 'round',
      backgroundBlendMode: 'multiply',
      transform: 'scaleY(-1)'
    },
    footer: {
      padding: '25px',
      backgroundSize: 'contain',
      backgroundColor: theme.palette.primary.light,
      backgroundImage: `url(${borderRococoImage})`,
      backgroundRepeat: 'round',
      backgroundBlendMode: 'multiply'
    },
    body: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary
    }
  })
