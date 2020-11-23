import {
  AppBar,
  IconButton,
  Link,
  Toolbar
} from '@material-ui/core';
import { useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Brightness5, Brightness7 } from '@material-ui/icons';
import { Character } from '@modules/Character';
import { StatusHud } from '@modules/StatusHud';
import { LoginAndRegister } from '@modules/User';
import { Welcome } from '@modules/Welcome';
import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import { styles } from './styles';

type Props = WithStyles<typeof styles>

interface MainProps extends Props {
  handleSwitch: () => void
}

function Main({ classes, handleSwitch }: MainProps) {
  const [checked, setChecked] = useState(false);
  const [logged, setLogged] = useState(false);
  const theme = useTheme()

  const toggleChecked = (event: React.MouseEvent) => {
    event.stopPropagation()
    setChecked((prev) => !prev);
    handleSwitch();
  };

  const fakeLogin = (validation: boolean) => {
    setLogged(validation)
  }

  return (
    <SkeletonTheme
      color={theme.palette.grey[400]}
      highlightColor={theme.palette.grey[300]}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          {logged ?? <StatusHud experience={50} hitpoints={50}></StatusHud>}
          <Link href="/login" variant="button" color="inherit">Login</Link>
          <IconButton color="inherit" onClick={toggleChecked} >
            {checked ? <Brightness7 /> : <Brightness5 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.mainContainer}>
        <Switch>
          <Route path="/login" component={LoginAndRegister} />
          <Route path="/register" component={LoginAndRegister} />
          <Route path="/" exact component={Welcome} />
          <Route path="/user" render={props => (
            <Character {...props} handleFakeLogin={() => fakeLogin(true)} />
          )} />
        </Switch>
      </div>
      <Footer />
    </SkeletonTheme>
  )
}

export default withStyles(styles)(Main)
