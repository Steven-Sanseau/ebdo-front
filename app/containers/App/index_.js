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
        <Route exact path="/v2/" component={Home} />

        <Redirect from="/v2/subscribe" to="/v2/abonnement" />
        <Route path="/v2/abonnement/:step" component={Checkout} />
        <Route path="/v2/abonnement" component={Checkout} />

        <Route exact path="/v2/abo/:type" component={Acknowledgment} />

        <Redirect from="/v2/offer" to="/v2/offre" />
        <Route exact path="/v2/offre/:step" component={Offer} />
        <Route exact path="/v2/offre" component={Offer} />

        <Redirect from="/v2/try" to="/v2/essai" />
        <Redirect from="/v2/jessaye" to="/v2/essai" />
        <Route path="/v2/essai/:step" component={TryIt} />
        <Route path="/v2/essai" component={TryIt} />

        <Redirect from="/v2/team" to="/v2/equipe" />
        <Route exact path="/v2/equipe" component={Team} />

        <Redirect from="/v2/manifest" to="/v2/manifeste" />
        <Redirect from="/v2/pourquoi" to="/v2/manifeste" />
        <Route exact path="/v2/manifeste" component={Manifest} />

        <Redirect from="/v2/lasource" to="/v2/source" />
        <Route exact path="/v2/source" component={Source} />

        <Redirect from="/v2/login" to="/v2/connexion" />
        <PublicRoute exact path="/v2/connexion" component={Login} />
        <PublicRoute path="/v2/connexion/:redirect" component={Login} />

        <Redirect from="/v2/logout" to="/v2/connexion" />

        <Route exact path="/v2/mentions-legales" component={Mentions} />
        <Route exact path="/v2/cgv" component={Cgv} />
        <Route
          component={() => {
            window.location = 'http://ebdo-lejournal.fr'
            return null
          }}
        />
      </Switch>
    </div>
  )
}
