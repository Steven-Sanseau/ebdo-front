import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PublicRoute from 'utils/PublicRoute'

import Home from 'containers/Home/Loadable'
import Checkout from 'containers/Checkout/Loadable'
import Acknowledgment from 'containers/Acknowledgment/Loadable'
import Offer from 'containers/Offer/Loadable'
import TryIt from 'containers/Tryit/Loadable'
import Team from 'containers/Team/Loadable'
import Source from 'containers/Source/Loadable'
import Manifest from 'containers/Manifest/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Login from 'containers/Login/Loadable'
import Cgv from 'containers/Cgv/Loadable'
import Mentions from 'containers/Mentions/Loadable'

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - ebdo" defaultTitle="ebdo">
        <meta name="description" content="Abonnement ebdo" />
      </Helmet>
      <Switch>
        <Route
          path="/"
          exact
          component={() => {
            window.location = 'http://ebdo-lejournal.fr'
            return null
          }}
        />

        <Route exact path="/accueil" component={Home} />
        <Route exact path="/" component={Home} />

        <Redirect from="/subscribe" to="/abonnement" />
        <Route path="/abonnement/:step" component={Checkout} />
        <Route path="/abonnement" component={Checkout} />

        <Route exact path="/abo/:type" component={Acknowledgment} />

        <Redirect from="/offer" to="/offre" />
        <Route exact path="/offre/:step" component={Offer} />
        <Route exact path="/offre" component={Offer} />

        <Redirect from="/try" to="/essai" />
        <Redirect from="/jessaye" to="/essai" />
        <Route path="/essai/:step" component={TryIt} />
        <Route path="/essai" component={TryIt} />

        <Redirect from="/team" to="/equipe" />
        <Route exact path="/equipe" component={Team} />

        <Redirect from="/manifest" to="/manifeste" />
        <Redirect from="/pourquoi" to="/manifeste" />
        <Route exact path="/manifeste" component={Manifest} />

        <Redirect from="/lasource" to="/source" />
        <Route exact path="/source" component={Source} />

        <Redirect from="/login" to="/connexion" />
        <PublicRoute exact path="/connexion" component={Login} />
        <PublicRoute path="/connexion/:redirect" component={Login} />

        <Redirect from="/logout" to="/connexion" />

        <Route exact path="/mentions-legales" component={Mentions} />
        <Route exact path="/cgv" component={Cgv} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
