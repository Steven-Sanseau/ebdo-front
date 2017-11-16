import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Checkout from 'containers/Checkout/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Checkout} />
        <Route exact path="/subscribe" component={Checkout} />
        <Route exact path="/subscribe/:step" component={Checkout} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
