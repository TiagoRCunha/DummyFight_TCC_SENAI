import { LinearProgress, withStyles } from '@material-ui/core'

export const HealthLinearProgress = withStyles({
  root: {
    height: '20px'
  },
  colorPrimary: {
    backgroundColor: '#3f3f3f'
  },
  barColorPrimary: {
    // backgroundColor: '#f34423'
    backgroundColor: '#d00',
    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.3) inset',
    backgroundImage: `linear-gradient(-75deg, rgba(255, 255, 255, 0.35) 10%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.35) 50%,
        rgba(255, 255, 255, 0.35) 75%,
        rgba(255, 255, 255, 0) 74%,
        rgba(255, 255, 255, 0))`
  }
})(LinearProgress)

export const ExpLinearProgress = withStyles({
  root: {
    height: '20px'
  },
  colorPrimary: {
    backgroundColor: '#3f3f3f'
  },
  barColorPrimary: {
    backgroundColor: '#3468fa'
  }
})(LinearProgress)
