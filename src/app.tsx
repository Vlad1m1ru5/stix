import Dashboard from 'components/dashboard'
import Home from 'components/home'
import Login from 'components/login'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path={['/', '/home']}>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default App
