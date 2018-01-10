import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import Image from 'components/Image'

import { push } from 'react-router-redux'
// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getValidTokenSlimpay } from 'actions/token'
// SELECTOR
import { makeSelectPath } from 'selectors/route'
import { makeSelectSubscriptionData } from 'selectors/subscription'

// COMPONENTS
import Header from 'components/Header'
import Button from 'components/Button'

const Subscription = styled(Col)`
  margin-top: 40px;

  p {
    font-size: 18px;
  }
`

const ColoredBackground = styled.div`
  background-color: var(--blue-greened);
`

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;

  background: var(${props => props.background});
`

const TextFinalMessage = styled.div`
  color: var(--white-true);
  font-size: 24px;
  font-weight: bold;
`

const TextRecapEmail = styled.div`
  color: var(--white-true);
  font-size: 18px;
  font-weight: 400;
`

const LoadingMessage = styled.div`
  color: var(--greyish-brown);
  font-size: 30px;
  font-weight: 400;
`

export class Acknowledgment extends React.Component {
  componentWillMount() {
    if (this.props.path.search.indexOf('?slimpay=valid') !== -1) {
      this.props.dispatchSlimpayTokenValid()
    }
  }
  returnHome = () => {
    this.dispatch(push('/'))
  }

  render() {
    const { match, subscriptions } = this.props

    return (
      <Layout
        background={
          match.params.type !== 'merci' ? '--background' : '--blue-greened'
        }>
        <Row center="xs" start="lg">
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type === 'merci' && (
              <div>
                <TextFinalMessage>
                  Nous sommes ravis de vous compter parmi les abonnés d’ebdo !
                </TextFinalMessage>
                <Image
                  src="https://s3.eu-west-3.amazonaws.com/ebdo/front/website/subscribed.png"
                  width="800px"
                />
                <TextRecapEmail>
                  Un récapitulatif de votre abonnement vient de vous être envoyé
                  par mail.
                </TextRecapEmail>
                <Button
                  colorText="--topaz"
                  color="--white-true"
                  handleRoute={this.returnHome}>
                  Retourner à l'accueil
                </Button>
              </div>
            )}
            {match.params.type === 'chargement' && (
              <div>
                <LoadingMessage>Chargement</LoadingMessage>
              </div>
            )}
            {match.params.type === 'erreur' && (
              <div>
                Une Erreur est survenue lors de votre commande
                <Button
                  handleRoute={() => {
                    this.props.dispatch(push('/abonnement'))
                  }}>
                  Je change mes informations
                </Button>
              </div>
            )}
            {match.params.type === 'existe' && (
              <div>
                Vous possédez déjà un abonnement il est donc impossible de vous
                réabonner.
                <div>
                  {subscriptions.map((subscription, key) => {
                    if (subscription.status === '01') {
                      return (
                        <Subscription key={key}>
                          <p>
                            Abonnement du{' '}
                            {new Date(
                              subscription.begin_at
                            ).toLocaleDateString()}{' '}
                            au{' '}
                            {new Date(subscription.end_at).toLocaleDateString()}
                          </p>
                          <p>
                            Dernier numéro reçu n°{
                              subscription.last_number_delivered
                            }
                          </p>
                        </Subscription>
                      )
                    }
                  })}
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Layout>
    )
  }
}

Acknowledgment.propTypes = {
  match: PropTypes.object,
  path: PropTypes.object,
  dispatchSlimpayTokenValid: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  path: makeSelectPath(),
  subscriptions: makeSelectSubscriptionData()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSlimpayTokenValid: () => dispatch(getValidTokenSlimpay()),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Acknowledgment)
