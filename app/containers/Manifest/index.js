import React from 'react'
import { Helmet } from 'react-helmet'

import ManifestPage from 'components/ManifestPage'

export class Manifest extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Manifest</title>
          <meta name="description" content="manifest ebdo" />
        </Helmet>
        <ManifestPage />
      </div>
    )
  }
}

export default Manifest
