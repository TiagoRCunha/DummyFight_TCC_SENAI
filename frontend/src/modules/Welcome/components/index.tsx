import { Box, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { CustomContainer } from '@modules/utils/CustomContainer';
import React from 'react';
import { styles } from '../styles/styles';

type Props = WithStyles<typeof styles>

interface WelcomeProps extends Props { }

function Welcome({ classes }: WelcomeProps) {

  return (
    <CustomContainer>
      <Typography variant="h4" align="center">Seja bem-vindo a Dummy Fight</Typography>
      <Box mx={2} my={5}>
        <Typography variant="body1" align="justify">
          Projeto criado por Tiago Rodrigues Cunha, para obtenção de nota da diciplina TCC.
        </Typography>
      </Box>
    </CustomContainer>
  )
}

export const WelcomeComponentWithStyle = withStyles(styles)(Welcome)