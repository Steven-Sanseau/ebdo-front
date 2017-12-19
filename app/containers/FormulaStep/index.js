import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { makeSelectOffersIsLoading, makeSelectOffers } from 'selectors/offer'
import { getOffersList, postoffer } from 'actions/offer'

import ToggleStep from 'components/ToggleStep/Loadable'
import NaturalFormOrder from 'components/NaturalFormOrder'
import FormulaText from 'components/LayoutStep/FormulaText'
import BoldText from 'components/LayoutStep/BoldText'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 15,
      target: 'me',
      time: 'inf',
      isNaturalForm: true
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.switchUI = this.switchUI.bind(this)
  }

  componentDidMount() {
    this.props.dispatchGetOffersList()
  }

  handleNextStep(event) {
    event.preventDefault()
    this.props.dispatchPostOffer()
  }

  handleChange(e, key) {
    this.setState({ [e]: key.value })
    const offer = {
      price: 15,
      target: 'me',
      time: 'inf'
    }
    this.props.dispatchSetOfferParams()
  }

  handleRoute() {
    // console.log(e);
  }

  switchUI() {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  contentOpen() {
    const { price, isNaturalForm, target, time, offers } = this.state
    console.log(offers)
    return (
      <div>
        <Row>
          <Col xs={11}>
            <FormulaText>
              Les frais de livraison en France (Métropilitaine et outre-mer)
              sont inclus. Les frais de livraison vers un autre pays seront
              ajoutés à l’étape suivante.
            </FormulaText>
          </Col>
        </Row>
        <Row center="xs">
          <NaturalFormOrder
            handleChange={this.handleChange}
            target={target}
            time={time}
            price={price}
            isNaturalForm={isNaturalForm}
            switchUI={this.switchUI}
          />
        </Row>
      </div>
    )
  }

  contentClose() {
    const { price } = this.state
    return (
      <div>
        Je m{"'"}abonne sans engagement pour un montant de{' '}
        <BoldText>{price}€</BoldText>
        <BoldText>/mois</BoldText>
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis ma formule"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
      />
    )
  }
}

FormulaStep.propTypes = {
  offers: PropTypes.array,
  offersIsLoading: PropTypes.bool,
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  dispatchGetOffersList: PropTypes.func,
  dispatchPostOffer: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  offersIsLoading: makeSelectOffersIsLoading(),
  offers: makeSelectOffers()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetOffersList: () => dispatch(getOffersList()),
    dispatchPostOffer: () => dispatch(postoffer())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(FormulaStep)
