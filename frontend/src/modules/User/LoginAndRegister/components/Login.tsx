import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup, Link, TextField, Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import React, { FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { styles } from '../styles/styles';

type Props = WithStyles<typeof styles> & RouteComponentProps

interface LoginProps extends Props { }

function Login({ classes, match, history }: LoginProps) {

  const routePath = match.path;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

  }

  const handleNavigate = (e: React.SyntheticEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(path);
  }

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography variant="body1" color="inherit" gutterBottom>
          {routePath !== "/register" ? "Faça o login" : "Crie uma nova conta"}
        </Typography>
        <form id={routePath !== "/register" ? "login-form" : "register-form"} onSubmit={handleSubmit}>
          <FormGroup row className={classes.form}>
            <TextField
              className={classes.textField}
              required
              label="Nome de usuário"
            />
            <TextField
              className={classes.textField}
              required
              color="secondary"
              label="Senha"
              type="password"
            />
            {routePath !== "/register" ?
              <FormControlLabel
                className={classes.checkbox}
                color="secondary"
                control={<Checkbox name="rememberMe" />}
                label="Lembre-se de mim"
              />
              :
              <>
                <TextField
                  className={classes.textField}
                  required
                  color="secondary"
                  label="Repita a senha"
                  type="password"
                />
                <TextField
                  className={classes.textField}
                  required
                  color="secondary"
                  label="Email"
                  type="email"
                />
                <FormControlLabel
                  className={classes.checkbox}
                  color="secondary"
                  control={<Checkbox name="terms" />}
                  label="Aceitar termos de contrato"
                />
              </>
            }
          </FormGroup>
        </form>
      </CardContent>
      <CardActions>
        {routePath === '/login' ?
          <Button
            form="login-form"
            type="submit"
            size="large"
            className={classes.buttons}
          >
            Entrar
        </Button>
          :
          <Link
            component="button"
            variant="body1"
            onClick={(e: React.SyntheticEvent) => handleNavigate(e, "/login")}
            className={classes.buttons}
          >
            Já tenho uma conta
          </Link>
        }
        {routePath === '/register' ?
          <Button
            form="register-form"
            type="submit"
            size="large"
            className={classes.buttons}
          >
            Registrar
          </Button>
          :
          <Link
            component="button"
            variant="body1"
            onClick={(e: React.SyntheticEvent) => handleNavigate(e, "/register")}
            className={classes.buttons}
          >
            Criar conta
          </Link>
        }
      </CardActions>
    </Card>
  )
}

export const LoginAndRegisterComponent = withStyles(styles)(Login)
