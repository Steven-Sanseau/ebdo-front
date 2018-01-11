import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
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
import Card from 'components/Icon/Card'
import BoldText from 'components/LayoutStep/BoldText'

const Subscription = styled(Col)`
  margin-top: 40px;

  p {
    font-size: 18px;
  }
`

const Layout = styled(Grid)`
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  background: var(${props => props.background});
`

const TextFinalMessage = styled.div`
  color: var(--white-true);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const TextRecapEmail = styled.div`
  color: var(--white-true);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`

const LoaderWrapper = styled.div`
  background-color: var(--booger);
  padding: 10px;
  border-radius: 30%;
`

const Loader = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0.25rem solid rgba(255, 255, 255, 0.25);
  border-top-color: #ffffff;
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export class Acknowledgment extends React.Component {
  componentWillMount() {
    if (this.props.path.search.indexOf('?slimpay=valid') !== -1) {
      this.props.dispatchSlimpayTokenValid()
    }
  }
  returnHome = () => {
    this.props.dispatch(push('/'))
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
            <Header
              logoColor={match.params.type === 'merci' ? 'white' : null}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type === 'merci' && (
              <div>
                <TextFinalMessage>
                  Nous sommes ravis de vous compter parmi les abonnés d’ebdo !
                </TextFinalMessage>
                <img
                  src="https://s3.eu-west-3.amazonaws.com/ebdo/front/website/subscribed.png"
                  style={{ maxHeight: '55vh', maxWidth: '80%' }}
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
              <Row center="xs">
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              </Row>
            )}
            {match.params.type === 'erreur' && (
              <div>
                <Row center="xs">
                  <Card />
                </Row>
                <Row center="xs">
                  <p>
                    <BoldText>Une Erreur est survenue</BoldText> lors de votre
                    commande.
                  </p>
                </Row>
                <Row center="xs">
                  <Col xs={12} sm={3}>
                    <Button
                      handleRoute={() => {
                        this.props.dispatch(push('/abonnement'))
                      }}>
                      Je change mes informations
                    </Button>
                  </Col>
                  <Col xs={12} sm={3}>
                    <Button
                      color={'--space-grey'}
                      colorText="--space-grey"
                      handleRoute={() => {
                        this.props.dispatch(push('/'))
                      }}>
                      Retourner à l'accueil
                    </Button>
                  </Col>
                </Row>
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
