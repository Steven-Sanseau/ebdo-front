import React from 'react'
import { Helmet } from 'react-helmet'

import SourcePage from 'components/SourcePage'

export class Source extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Espace Abonné</title>
          <meta name="description" content="La Source - Espace Abonné Ebdo" />
        </Helmet>
        <SourcePage />
      </div>
    )
  }
}

export default Source
