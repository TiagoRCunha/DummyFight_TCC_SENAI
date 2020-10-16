import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import history from './config/history';
import App from './pages/App';
import theme from "./theme";

const root = document.getElementById('root')

const renderApp = (Application: typeof App) => {

  ReactDOM.render(
    <AppContainer>
      <React.StrictMode>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <Application />
          </MuiThemeProvider>
        </Router>
      </React.StrictMode>
    </AppContainer>
    ,
    root
  );
}

renderApp(App)


/* if (module.hot) {
  module.hot.accept('./pages/App', () => {

    const NextApp = require('./pages/App').default;
    renderApp(NextApp);
  });
} */