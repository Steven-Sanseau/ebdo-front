import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Checkout from 'containers/Checkout/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
// import { Elements } from 'react-stripe-elements'

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - ebdo" defaultTitle="ebdo">
        <meta name="description" content="Abonnement ebdo" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Checkout} />
        <Route exact path="/subscribe" component={Checkout} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
