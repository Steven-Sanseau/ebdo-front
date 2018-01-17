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
const ErrorText = styled.div`
  margin: 15% 0 5% 0;
  font-size: 18px;
  line-height: 26px;
`
const SmallError = styled.div`
  margin-top: 30px;
  font-size: 14px;
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

  handleCrisp = () => {
    localStorage.setItem('crisp-intro', 'true')
    $crisp.push(['do', 'chat:open'])
    $crisp.push([
      'do',
      'message:show',
      ['text', 'Bonjour :)! vous souhaitez offrir un abonnement ?']
    ])
    $crisp.push(['set', 'session:segments', [['full']]])
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
              <div>
                <Row center="xs">
                  <Col xs={12} sm={4}>
                    <ErrorText>
                      <BoldText>Veuillez patienter</BoldText>
                      <br />
                      Merci de ne pas rafraichir cette page
                    </ErrorText>
                  </Col>
                </Row>
                <Row center="xs">
                  <LoaderWrapper>
                    <Loader />
                  </LoaderWrapper>
                </Row>
              </div>
            )}
            {match.params.type === 'erreur' && (
              <div>
                <Row center="xs">
                  <Card />
                </Row>
                <Row center="xs">
                  <Col xs={12} sm={4}>
                    <ErrorText>
                      <BoldText>Une Erreur est survenue</BoldText> lors de votre
                      commande. <br />
                      Nous vous invitons à vérifier vos informations de paiement
                      ou à essayer avec un autre moyen de paiement.<br />
                      <br />
                    </ErrorText>
                  </Col>
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
                  {/* <Col xs={12} sm={3}>
                    <Button
                      color={'--space-grey'}
                      colorText="--space-grey"
                      handleRoute={() => {
                        this.props.dispatch(push('/'))
                      }}>
                      Retourner à l'accueil
                    </Button>
                  </Col> */}
                </Row>
                <Row center="xs">
                  <Col xs={12} sm={3}>
                    <SmallError>
                      Si l'erreur persiste, n'hésitez pas à contacter notre
                      service client en cliquant sur la petite bulle bleue en
                      bas à droite de votre écran.
                    </SmallError>
                  </Col>
                </Row>
              </div>
            )}
            {match.params.type === 'existe' && (
              <div>
                Vous possédez déjà un abonnement sans engagement il est donc
                impossible de vous réabonner une seconde fois avec le même
                compte.<br />
                Si vous souhaitez offrir un abonnement, veuillez contacter notre
                service client
                <div>
                  <Subscription>
                    <Row center="xs">
                      <Col xs={12} sm={3}>
                        <Button
                          handleRoute={() => {
                            this.props.dispatch(push('/'))
                          }}>
                          Retourner à l{"'"}accueil
                        </Button>
                      </Col>{' '}
                      <Col xs={12} sm={3}>
                        <Button color="--squash" handleRoute={this.handleCrisp}>
                          Contacter le service client
                        </Button>
                      </Col>
                    </Row>
                  </Subscription>
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
