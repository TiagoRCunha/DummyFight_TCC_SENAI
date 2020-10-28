import { createStyles, Theme } from '@material-ui/core'
// import VectorBorder from '../../assets/vector-gothic-circle.png'

const sizeCircle = '100px'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    circleBackground: {
      width: sizeCircle,
      height: sizeCircle,
      backgroundColor: '#f0ffff',
      border: '5px double grey',
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: 'inset 0px 0px 25px 25px rgba(128,128,128,0.88)',
      top: 0
    },
    circleForeground: {
      /*  borderImage: `url(${VectorBorder})`,
      borderImageSlice: '37%',
      borderImageWidth: '40px',
      borderImageOutset: 0,
      borderImageRepeat: 'stretch',
      backgroundColor: 'rgba(0,0,0,0)', */
      border: '5px solid transparent',
      borderRadius: '50%',
      position: 'absolute',
      textShadow: '1px 1px 3px black',
      width: sizeCircle,
      height: sizeCircle,
      top: '-5px',
      left: '-5px'
    },
    healthBarBackground: {
      width: '425px',
      height: '30px',
      position: 'absolute',
      zIndex: -1,
      top: '18px',
      left: '85px',
      transform: 'skewX(-35deg)',
      backgroundColor: 'darkgray'
    },
    healthBar: {
      width: '400px',
      border: '1px solid red',
      position: 'relative',
      top: '4px',
      height: '20px'
    },
    expBarBackground: {
      width: '403px',
      height: '30px',
      position: 'absolute',
      zIndex: -1,
      left: '85px',
      top: '50px',
      transform: 'skewX(-35deg)',
      backgroundColor: 'darkgray'
    },
    expBar: {
      width: '300px',
      border: '1px solid blue',
      position: 'relative',
      top: '4px',
      height: '20px'
    },
    lvlNumber: {
      justifyContent: 'space-evenly',
      display: 'flex',
      alignItems: 'center',
      minHeight: '-webkit-fill-available',
      color: theme.palette.primary.main
    }
  })
