import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { push } from 'react-router-redux'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeSelectOffer,
  makeSelectOfferError,
  makeSelectOffersIsLoading,
  makeSelectOfferErrorMessage
} from 'selectors/offer'

import { newCheckout } from 'actions/checkout'
import { setOfferParams, getoffer } from 'actions/offer'

import NaturalFormOrder from 'components/NaturalFormOrder'

import Button from 'components/Button'

const ButtonWrap = styled.div`
  margin-top: 40px;
  & > div {
    display: inline-block;
  }
  button {
    font-size: 18px;
  }
`
const LinkWrapper = styled(Link)`
  color: var(--grey-blue);
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;
`

class NaturalFormOrderContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = { isNaturalForm: true }

  handleChange = (key, event) => {
    let params = {}
    if (key === 'is_gift') {
      params = { [key]: event.value == 1 }
    }

    if (key === 'duration') {
      const value = Number(event.value)
      params = { [key]: value, time_limited: value !== 0 }
    }

    if (key === 'monthly_price_ttc') {
      params = { [key]: Number(event.value) }
    }

    this.props.dispatchSetOfferParams(params, false)
  }

  handleRoute = () => {
    this.props.dispatchNewCheckout()
  }

  switchUI = () => {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  render() {
    const { isNaturalForm } = this.state

    const { offer, isFormOpen } = this.props

    return (
      <div>
        <NaturalFormOrder
          handleChange={this.handleChange}
          target={offer.data.is_gift}
          time={offer.data.duration}
          price={offer.data.monthly_price_ttc}
          isNaturalForm={isNaturalForm}
          switchUI={this.switchUI}
          isFormOpen={isFormOpen}
        />
        {isNaturalForm && (
          <ButtonWrap>
            <Button
              handleRoute={this.handleRoute}
              color="--squash"
              className="big">
              Commander
            </Button>
          </ButtonWrap>
        )}
        {!isNaturalForm && (
          <ButtonWrap>
            <Button
              handleRoute={this.switchUI}
              color="--squash"
              className="big">
              Revenir au formulaire
            </Button>
          </ButtonWrap>
        )}
      </div>
    )
  }
}

NaturalFormOrderContainer.propTypes = {
  dispatchSetOfferParams: PropTypes.func,
  dispatchNewCheckout: PropTypes.func,
  dispatchGetOffer: PropTypes.func,
  dispatchPush: PropTypes.func,
  offer: PropTypes.object,
  offerError: PropTypes.bool,
  offerIsLoading: PropTypes.bool,
  offerErrorMessage: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  offer: makeSelectOffer(),
  offerIsLoading: makeSelectOffersIsLoading(),
  offerError: makeSelectOfferError(),
  offerErrorMessage: makeSelectOfferErrorMessage()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetOfferParams: (params, isRedirect) =>
      dispatch(setOfferParams(params, isRedirect)),
    dispatchGetOffer: () => dispatch(getoffer()),
    dispatchPush: route => dispatch(push(route)),
    dispatchNewCheckout: () => dispatch(newCheckout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NaturalFormOrderContainer
)
