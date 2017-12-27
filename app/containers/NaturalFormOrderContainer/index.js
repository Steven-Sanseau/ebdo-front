import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import NaturalFormOrder from 'components/NaturalFormOrder'

import Button from 'components/Button'

const ButtonWrap = styled.div`
  margin-top: 30px;
`

export class NaturalFormOrderContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.switchUI = this.switchUI.bind(this)
  }
  state = {
    is_gift: '0',
    duration: '12',
    monthly_price_ttc: '15',
    isNaturalForm: true
  }

  handleChange(e, key) {
    this.setState({ [e]: key.value })
  }

  handleRoute() {
    const { duration } = this.state

    this.props.dispatchSetOfferParams({
      monthly_price_ttc: Number(this.state.monthly_price_ttc)
    })

    this.props.dispatchSetOfferParams({
      duration: Number(duration),
      time_limited: Number(duration) !== 0
    })
    this.props.dispatchSetOfferParams({ is_gift: this.state.is_gift == 1 })
  }

  switchUI() {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  render() {
    const { is_gift, duration, monthly_price_ttc, isNaturalForm } = this.state
    return (
      <div>
        <NaturalFormOrder
          handleChange={this.handleChange}
          target={is_gift}
          time={duration}
          price={monthly_price_ttc}
          isNaturalForm={isNaturalForm}
          switchUI={this.switchUI}
        />
        {isNaturalForm && (
          <ButtonWrap>
            <Button handleRoute={this.handleRoute} color="--squash">
              Commander
            </Button>
          </ButtonWrap>
        )}
        {!isNaturalForm && (
          <ButtonWrap>
            <Button handleRoute={this.switchUI} color="--squash">
              Revenir au formulaire
            </Button>
          </ButtonWrap>
        )}
      </div>
    )
  }
}

NaturalFormOrderContainer.propTypes = {
  dispatchSetOfferParams: PropTypes.func
}

export default NaturalFormOrderContainer
