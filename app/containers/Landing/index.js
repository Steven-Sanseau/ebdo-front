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
import { setOfferParams } from 'actions/offer'
import { newCheckout } from 'actions/checkout'

// SELECTOR
import { makeSelectPath } from 'selectors/route'
import { makeSelectSubscriptionData } from 'selectors/subscription'

// COMPONENTS
import Header from 'components/Header'
import Button from 'components/Button'
import Card from 'components/Icon/Card'
import ArrowDown from 'components/Icon/ArrowDown'
import BoldText from 'components/LayoutStep/BoldText'

const Subscription = styled(Col)`
  margin-top: 40px;

  p {
    font-size: 18px;
  }
`

const Layout = styled(Grid)`
  width: 100%;
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
  margin: 5% 0 5% 0;
  font-size: 18px;
  line-height: 26px;
  text-align: justify;
  display: block;
`
const SmallError = styled.div`
  margin-top: 30px;
  font-size: 14px;
`

export class Landing extends React.Component {
  render() {
    const { match, subscriptions } = this.props

    return (
      <Layout background="--background">
        <Row center="xs">
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type === 'stop' && (
              <div>
                <Row center="xs">
                  <Col xs={12} sm={5}>
                    <ErrorText>
                      <BoldText>
                        Chère lectrice,<br /> Cher lecteur,<br />
                      </BoldText>
                      <br />
                      <br />
                      Le 12 janvier, lorsque le premier numéro d’Ebdo est paru,
                      la rédaction était portée par votre soutien, par les
                      rencontres avec ses futurs lecteurs lors de la tournée du
                      bus Ebdo et par le succès de la campagne de crowdfunding.<br />
                      <br />
                      Notre projet se voulait à contre-courant de la fatalité et
                      du déclin de la presse : un hebdomadaire papier,
                      indépendant, sans publicité, généraliste et accessible au
                      plus grand nombre.<br />
                      <br />
                      Chacun de ces mots représentait un défi à lui seul. Tenir
                      les cinq engagements à la fois était une gageure. Nous
                      pensions que c’était justement ainsi, en mettant la barre
                      au plus haut, qu’Ebdo pourrait faire la différence.<br />
                      <br />
                      En deux mois, la rédaction a réussi de belles choses.
                      Presque vingt mille lecteurs – dont vous faites partie –
                      achètent ou reçoivent chaque semaine ce journal de poche
                      qui ne ressemble à aucun autre. Mais ce n’est pas assez,
                      hélas !<br />
                      <br />
                      Depuis un mois, notre situation économique s’est dégradée
                      de manière spectaculaire. Les ventes et les abonnements
                      sont désormais au plus bas. Nous avons essayé de répondre
                      aux critiques et d’améliorer Ebdo, semaine après semaine.
                      Sans succès. <br />
                      <br />Nous n’avons pas d’autre choix que de décider la
                      suspension de la parution de votre journal et de demander
                      la nomination d’un administrateur judiciaire pour
                      poursuivre l’activité des revues XXI et 6Mois et avoir le
                      temps de trouver une solution globale.<br />
                      <br /> Pour les abonnés d’Ebdo qui avaient choisi le
                      prélèvement bancaire, celui-ci sera arrêté. Pour ceux qui
                      avaient choisi de payer par chèque, nous étudions les
                      modalités d’une offre commerciale à partir des revues XXI
                      et 6Mois et nous reviendrons très vite vers vous.<br />
                      <br />
                      Un journal sans publicité ne peut pas vivre sans lecteurs.
                      S’il ne se vend pas, il meurt. C’est la règle du jeu et
                      nous la connaissions avant de nous lancer dans l’aventure
                      d’un journal indépendant et sans publicité.<br />
                      <br />
                      Il reste le formidable espoir suscité par ce journal, ces
                      mois intenses de préparation, l’innovation de la Source et
                      de grandes émotions vécues ensemble, malgré quelques
                      tempêtes.<br />
                      <br />
                      Merci à toute l’équipe d’avoir cru à ce projet.<br />
                      Merci à vous d’avoir soutenu la presse indépendante.<br />
                      <br />
                      <br />
                      Laurent Beccaria et Patrick de Saint-Exupéry
                    </ErrorText>
                  </Col>
                </Row>
                <Row>
                  <Col>.</Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Layout>
    )
  }
}

Landing.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
