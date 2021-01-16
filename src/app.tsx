import ImposterLayout from 'components/imposter-layout'
import GlobalTheme from 'components/styled/global-theme'
import LoadingMessage from 'components/loading-message'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('components/dashboard-page'))
const HomePage = React.lazy(() => import('components/home-page'))
const LoginPage = React.lazy(() => import('components/login-page'))

const App: React.FunctionComponent = () => (
  <>
    <Router>
      <ImposterLayout>
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path={['/', '/home']} component={HomePage} />
          </Switch>
        </Suspense>
      </ImposterLayout>
    </Router>
    <GlobalTheme />
  </>
)

export default App
