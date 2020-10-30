import { Box, Button } from '@material-ui/core';
import { useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { styles } from '../styles/Welcome';

type Props = WithStyles<typeof styles>

interface WelcomeProps extends Props { }

function Welcome({ classes }: WelcomeProps) {
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <Button color="inherit">Login</Button>
      <Button variant="contained" color="inherit">Teste</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.primary.contrastText }}>P contrast</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.primary.dark }}>P Dark</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>P Light</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.contrastText }}>S contrast</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.dark }}>S dark</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.light }}>S light</Button>
      <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.main }}>S main</Button>
    </Box>
  )
}

export const WelcomeComponentWithStyle = withStyles(styles)(Welcome)