import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectPathName } from 'selectors/route'
import { makeSelectSubscriptionData } from 'selectors/subscription'

// COMPONENTS
import Header from 'components/Header'

const Subscription  = styled(Col)`
  margin-top: 40px;
  
  p {
    font-size: 18px;
  }
`

export class Acknowledgment extends React.Component {
  render() {
    const { match, subscriptions } = this.props

    return (
      <div>
        <Row center="xs" start="lg">
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type === 'merci' && 'Nous sommes ravis de vous compter parmi les abonnés d’ebdo !'}
            {match.params.type === 'existe' &&
              <div>
                Vous possédez déjà un abonnement il est donc impossible de vous réabonner.
                <div>
                  {subscriptions.map((subscription, key) => {
                    if (subscription.status === "01") {
                      return <Subscription key={key}>
                        <p>Abonnement du {new Date(subscription.begin_at).toLocaleDateString()} au {new Date(subscription.end_at).toLocaleDateString()}</p>
                        <p>Dernier numéro reçu n°{subscription.last_number_delivered}</p>
                      </Subscription>
                    }
                  })}
                </div>
              </div>
            }
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
  pathName: makeSelectPathName(),
  subscriptions: makeSelectSubscriptionData()
})

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Acknowledgment)
