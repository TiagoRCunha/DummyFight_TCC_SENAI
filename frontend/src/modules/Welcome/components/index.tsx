import { Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { CustomContainer } from '../../utils/CustomContainer';
import { styles } from '../styles/Welcome';

type Props = WithStyles<typeof styles>

interface WelcomeProps extends Props { }

function Welcome({ classes }: WelcomeProps) {

  return (
    <CustomContainer>
      <Typography variant="h4">Seja bem-vindo a Dummy Fight</Typography>
    </CustomContainer>
  )
}

export const WelcomeComponentWithStyle = withStyles(styles)(Welcome)