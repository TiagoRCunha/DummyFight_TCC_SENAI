import { Card, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { styles } from '../styles/styles';

type Props = WithStyles<typeof styles> & RouteComponentProps

interface CharacterProps extends Props {
  handleFakeLogin: () => void
}

function Character({ classes, match, handleFakeLogin }: CharacterProps) {

  const routePath = match.path;

  if (routePath) {
    handleFakeLogin()
  }

  return (
    <Card className={classes.root} elevation={3}>
      <Typography variant="h1">Character profile</Typography>
    </Card>
  )
}

export const CharacterComponent = withStyles(styles)(Character)
