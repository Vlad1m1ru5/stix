import GlobalTheme from 'components/global-theme'
import Loader from 'components/loader'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Dashboard = React.lazy(() => import('components/dashboard'))
const Home = React.lazy(() => import('components/home'))
const Login = React.lazy(() => import('components/login'))

const App: React.FunctionComponent = () => (
  <>
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path={['/', '/home']} component={Home} />
        </Switch>
      </Suspense>
    </Router>
    <GlobalTheme />
  </>
)

export default App
