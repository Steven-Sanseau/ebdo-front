import React from 'react'
import Helmet from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

import Header from 'components/Header'

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Soutenir ebdo</title>
          <meta name="description" content="Abonnement à ebdo le journal" />
        </Helmet>
        <Row center="xs" start="lg">
          <Col mdOffset={1} xs={12} md={11}>
            <Header />
          </Col>
        </Row>
        <h1>Page introuvable</h1>
      </div>
    )
  }
}
