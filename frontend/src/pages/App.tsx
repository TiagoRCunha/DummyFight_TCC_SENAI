import { MuiThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { defaultTheme, lightTheme } from '../theme'
import Main from './Main'
import NotFound from './NotFound'


export default function App() {
  const [checked, setChecked] = useState(false)

  const handleSwitch = () => {
    setChecked((prev) => !prev)
  }

  return (
    <MuiThemeProvider theme={checked ? lightTheme : defaultTheme}>
      <Switch>
        <Route path="/notFound" exact component={NotFound} />
        <Route path="/">
          <Main handleSwitch={handleSwitch} />
        </Route>
      </Switch>
    </MuiThemeProvider>

  )
}
