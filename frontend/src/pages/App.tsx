import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'
import NotFound from './NotFound'


export default function App() {
  return (
    <Switch>
      <Route path="/notFound" exact component={NotFound} />
      <Route path="/" component={Main} />
    </Switch>

  )
}
