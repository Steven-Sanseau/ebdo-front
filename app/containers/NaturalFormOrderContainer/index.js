import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export class NaturalFormOrderContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      is_gift: false,
      duration: 12,
      monthly_price_ttc: 15,
      isNaturalForm: true
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      is_gift: newProps.offer.data.is_gift,
      duration: newProps.offer.data.duration,
      monthly_price_ttc: newProps.offer.data.monthly_price_ttc
    })
  }

  componentDidMount() {
    this.setState({
      is_gift: this.props.offer.data.is_gift,
      duration: this.props.offer.data.duration,
      monthly_price_ttc: this.props.offer.data.monthly_price_ttc
    })
  }

  handleChange = (e, key) => {
    this.setState({ [e]: key.value })
  }

  handleRoute = () => {
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

  switchUI = () => {
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
            <Button handleRoute={this.handleRoute} color="--squash" className="big">
              Commander
            </Button>
            <LinkWrapper to="#">J'ai un code cadeau</LinkWrapper>
          </ButtonWrap>
        )}
        {!isNaturalForm && (
          <ButtonWrap>
            <Button handleRoute={this.switchUI} color="--squash" className="big">
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
  offer: PropTypes.object
}

export default NaturalFormOrderContainer
