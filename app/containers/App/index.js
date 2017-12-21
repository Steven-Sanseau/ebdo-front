import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Home from 'containers/Home/Loadable'
import Checkout from 'containers/Checkout/Loadable'
import Team from 'containers/Team/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Login from 'containers/Login/Loadable'

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - ebdo" defaultTitle="ebdo">
        <meta name="description" content="Abonnement ebdo" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/subscribe" component={Checkout} />
        <Route path="/abonnement" component={Checkout} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/subscribe" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
