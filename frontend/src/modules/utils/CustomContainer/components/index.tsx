import { Box, Paper, PaperProps } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { styles } from '../styles/styles';

type Props = WithStyles<typeof styles> & PaperProps

interface CustomContainerProps extends Props { }

function CustomContainer({ classes, children }: CustomContainerProps) {

  return (
    <Paper className={classes.root}>
      <Box className={classes.header}></Box>
      <Box className={classes.body}>
        {children}
      </Box>
      <Box className={classes.footer}></Box>
    </Paper>)
}

export const CustomContainerComponentWithStyle = withStyles(styles)(CustomContainer)