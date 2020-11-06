import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { createStyles, Theme, useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Brightness5, Brightness7 } from '@material-ui/icons';
import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Route, Switch } from 'react-router-dom';
// import { StatusHud } from '../../modules/StatusHud';
import { LoginAndRegister } from '../../modules/User';
import { Welcome } from '../../modules/Welcome';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.dark,
      maxHeight: "70px"
    },
    mainContainer: {
      width: "100%",
      backgroundColor: theme.palette.grey[400],
      boxSizing: "border-box",
      position: 'absolute',
      "& > div": {
        margin: "8em auto",
        maxWidth: "900px",
      }
    }
  });

type Props = WithStyles<typeof styles>

interface MainProps extends Props {
  handleSwitch: () => void
}

function Main({ classes, handleSwitch }: MainProps) {
  const [checked, setChecked] = useState(false);
  const theme = useTheme()

  const toggleChecked = (event: React.MouseEvent) => {
    event.stopPropagation()
    setChecked((prev) => !prev);
    handleSwitch();
  };

  return (
    <SkeletonTheme
      color={theme.palette.grey[400]}
      highlightColor={theme.palette.grey[300]}
    >
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar >
          {/* <StatusHud experience={50} hitpoints={50}></StatusHud> */}
          <Button color="inherit">Login</Button>
          <IconButton color="default" onClick={toggleChecked} >
            {checked ? <Brightness7 /> : <Brightness5 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.mainContainer}>
        <Switch>
          <Route path="/login" component={LoginAndRegister} />
          <Route path="/register" component={LoginAndRegister} />
          <Route path="/" exact component={Welcome} />
        </Switch>
      </div>
    </SkeletonTheme>
  )
}

export default withStyles(styles)(Main)
