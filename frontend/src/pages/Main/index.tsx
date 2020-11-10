import { AppBar, Grid, IconButton, Link, LinkProps, List, ListItem, ListItemText, ListSubheader, Toolbar, Typography } from '@material-ui/core';
import { useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Brightness5, Brightness7 } from '@material-ui/icons';
import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Route, Switch } from 'react-router-dom';
// import { StatusHud } from '../../modules/StatusHud';
import { LoginAndRegister } from '../../modules/User';
import { Welcome } from '../../modules/Welcome';
import { styles } from './styles';

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

  function ListItemLink(props: LinkProps) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <SkeletonTheme
      color={theme.palette.grey[400]}
      highlightColor={theme.palette.grey[300]}
    >
      <AppBar className={classes.appBar}>
        <Toolbar >
          {/* <StatusHud experience={50} hitpoints={50}></StatusHud> */}
          <Link href="/login" variant="button" color="inherit">Login</Link>
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
      <footer className={classes.footer}>
        <Grid className={classes.gridContainer} container justify="center" spacing={5}>
          <Grid item lg={3}>
            <List>
              <ListSubheader color="default" inset component="h5">Parceiros</ListSubheader>
              <ListItemLink target="_blank" href="https://senaies.com.br/">
                <ListItemText secondary="SENAI" inset />
              </ListItemLink>
              <ListItemLink target="_blank" href="https://findes.com.br/">
                <ListItemText secondary="FINDES" inset />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item lg={3}>
            <List>
              <ListSubheader color="default" inset component="h5">Sobre</ListSubheader>
              <ListItemLink>
                <ListItemText inset secondary="Contribuir" />
              </ListItemLink>
              <ListItemLink>
                <ListItemText inset secondary="Apectos técnicos" />
              </ListItemLink>
              <ListItemLink>
                <ListItemText inset secondary="Visão do Produto" />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item lg={3}>
            <List>
              <ListSubheader color="default" inset component="h5">Contato</ListSubheader>
              <ListItemLink>
                <ListItemText inset secondary="Twitter" />
              </ListItemLink>
              <ListItemLink>
                <ListItemText inset secondary="Email" />
              </ListItemLink>
              <ListItemLink>
                <ListItemText inset secondary="Github" />
              </ListItemLink>
              <ListItemLink>
                <ListItemText inset secondary="Linkedin" />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textPrimary" >&copy; 2020 Tiago Rodrigues Cunha | Versão 1</Typography>
          </Grid>
        </Grid>
      </footer>
    </SkeletonTheme>
  )
}

export default withStyles(styles)(Main)
