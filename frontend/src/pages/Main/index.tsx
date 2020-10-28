import { AppBar, Button, createStyles, Theme, Toolbar, useTheme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { RouteComponentProps } from 'react-router';
import { StatusHud } from '../../modules/StatusHud';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.dark,
      maxHeight: "70px"
    }
  });

type Props = WithStyles<typeof styles> & RouteComponentProps

interface MainProps extends Props { }

function Main(props: MainProps) {
  const theme = useTheme()

  return (
    <SkeletonTheme
      color={theme.palette.grey[400]}
      highlightColor={theme.palette.grey[300]}
    >
      <AppBar position="absolute" className={props.classes.appBar}>
        <Toolbar>
          <StatusHud experience={50} hitpoints={50}></StatusHud>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </SkeletonTheme>
  )
}

export default withStyles(styles)(Main)
