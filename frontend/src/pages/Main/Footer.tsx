import {
  Grid,
  LinkProps,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { styles } from './styles';


type Props = WithStyles<typeof styles>

interface FooterProps extends Props { }

function Footer({ classes }: FooterProps) {

  function ListItemLink(props: LinkProps) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <footer className={classes.footer}>
      <Grid className={classes.gridContainer} container justify="center" spacing={5}>
        <Grid item lg={3}>
          <List>
            <ListSubheader inset component="h5">Parceiros</ListSubheader>
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
            <ListSubheader inset component="h5">Sobre</ListSubheader>
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
            <ListSubheader inset component="h5">Contato</ListSubheader>
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

  )
}


export default withStyles(styles)(Footer)
