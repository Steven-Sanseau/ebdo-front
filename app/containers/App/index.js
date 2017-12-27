import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PrivateRoute from 'utils/PrivateRoute'

import Home from 'containers/Home/Loadable'
import Checkout from 'containers/Checkout/Loadable'
import Gift from 'containers/Gift/Loadable'
import Offer from 'containers/Offer/Loadable'
import TryIt from 'containers/Tryit/Loadable'
import Team from 'containers/Team/Loadable'
import Source from 'containers/Source/Loadable'
import Manifest from 'containers/Manifest/Loadable'
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
        <Route path="/offer" component={Offer} />
        <Route path="/offre" component={Offer} />
        <Route path="/gift" component={Gift} />
        <Route path="/cadeau" component={Gift} />
        <Route path="/try" component={TryIt} />
        <Route path="/jessaye" component={TryIt} />
        <Route path="/essai" component={TryIt} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/equipe" component={Team} />
        <Route exact path="/manifest" component={Manifest} />
        <Route exact path="/pourquoi" component={Manifest} />
        <PrivateRoute exact path="/source" component={Source} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
