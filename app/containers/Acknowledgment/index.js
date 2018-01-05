import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectPathName } from 'selectors/route'

// COMPONENTS
import Header from 'components/Header'

export class Acknowledgment extends React.Component {
  render() {
    const { match } = this.props

    return (
      <div>
        <Row center="xs" start="lg">
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type == 'merci' &&
              'Nous sommes ravis de vous compter parmi les abonnés d’ebdo !'}
          </Col>
        </Row>
      </div>
    )
  }
}

Acknowledgment.propTypes = {
  pathName: PropTypes.string,
  match: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  pathName: makeSelectPathName()
})

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Acknowledgment)
