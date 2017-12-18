import React from 'react'
import PropTypes from 'prop-types'

import Dropdown from 'react-dropdown'
import styled from 'styled-components'
import 'components/NaturalFormOrder/NaturalForm.css'
import { media } from 'global-styles'

const DropdownWrap = styled(Dropdown)`
  display: inline-block;
  border-radius: 35px;
  padding: 0 50px 5px 20px;
  border-color: var(${props => (props.color ? props.color : '--black')});
  border-style: dashed;
  border-width: 1px;
  color: var(${props => (props.color ? props.color : '--black')});
  font-size: 50px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  &:not(.is-open):hover {
    background-color: var(${props => (props.color ? props.color : '--black')});
    color: var(--white-true);
  }
  &.is-open .Dropdown-menu {
    background-color: white;
    border-color: var(${props => (props.color ? props.color : '--black')});
    border-style: solid;
    border-width: 1px;
    border-radius: 35px;
    margin-top: -70px;
  }
  .Dropdown-option.is-selected h3 {
    color: var(${props => (props.color ? props.color : '--black')});
  }
  .Dropdown-option .valueWrap:hover h3 {
    color: var(${props => (props.color ? props.color : '--black')});
  }
  .Dropdown-root:not(.is-open):after {
    color: var(${props => (props.color ? props.color : '--black')});
  }

  ${media.tablet`
    .valueWrap h3 {
      font-size: 44px;
    }
`};
`
const Subtitle = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
`

const TextWrap = styled.span`
  font-size: 50px;
  line-height: 70px;
  letter-spacing: -1.3px;
`
const Help = styled.div`
  display: inline-block;
  font-size: 22px;
  vertical-align: text-top;
  margin-top: -40px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  transition: transform 0.15s ease-out;
  cursor: pointer;
  background-color: var(--turquoise-blue);
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`

const valueElem = (title, subtitle) => (
  <div className="valueWrap">
    <h3>{title}</h3>
    <Subtitle>{subtitle}</Subtitle>
  </div>
)

const options1 = [
  {
    value: 'me',
    label: valueElem(
      'je reçois',
      <span>
        <strong>ebdo</strong> chez moi
      </span>
    )
  },
  {
    value: 'gift',
    label: valueElem(
      "j'offre",
      <span>
        <strong>ebdo</strong> à un proche
      </span>
    )
  }
]
const options2 = [
  {
    value: 'inf',
    label: valueElem(
      'Chaque mois',
      <span>Sans engagement, je pourrais me désengager en un clic !</span>
    )
  },
  {
    value: '12',
    label: valueElem(
      'Pendant 3 mois',
      <span>Régler maintenant et recevez 12 numéros.</span>
    )
  },
  {
    value: '24',
    label: valueElem(
      'Pendant 6 mois',
      <span>Régler maintenant et recevez 24 numéros.</span>
    )
  },
  {
    value: '48',
    label: valueElem(
      'Pendant 12 mois',
      <span>Régler maintenant et recevez 48 numéros.</span>
    )
  }
]
const options3 = [
  {
    value: 10,
    label: valueElem(
      <span>
        10€ <sup>/ mois</sup>
      </span>,
      <span>
        <strong>ebdo</strong> sera presque à l'équilibre !
      </span>
    )
  },
  {
    value: 15,
    label: valueElem(
      <span>
        15€ <sup>/ mois</sup>
      </span>,
      <span>
        <strong>ebdo</strong> sera à l'équilibre !
      </span>
    )
  },
  {
    value: 20,
    label: valueElem(
      <span>
        20€ <sup>/ mois</sup>
      </span>,
      <span>
        Vous aiderez d'autres abonnés à s'offrir <strong>ebdo</strong> !
      </span>
    )
  },
  {
    value: 5,
    label: valueElem(
      <span>
        5€ <sup>/ mois</sup>
      </span>,
      <span>
        Vous bénéficierez de la solidarité d'autres abonnés d'
        <strong>ebdo</strong>
      </span>
    )
  }
]
function NaturalFormOrder(props) {
  const { handleChange, target, time, price, switchUI, isNaturalForm } = props
  if (isNaturalForm) {
    return (
      <div>
        <DropdownWrap
          options={options2}
          value={options2.find(el => el.value === time)}
          color="--topaz"
          onChange={handleChange.bind(this, 'time')}
        />

        <DropdownWrap
          options={options1}
          value={options1.find(el => el.value === target)}
          color="--warm-purple"
          onChange={handleChange.bind(this, 'target')}
        />

        <TextWrap>
          {time} {target} pour le prix de{' '}
        </TextWrap>
        <DropdownWrap
          options={options3}
          value={options3.find(el => el.value === price)}
          color="--turquoise-blue"
          onChange={handleChange.bind(this, 'price')}
        />
        <Help onClick={switchUI}>?</Help>
      </div>
    )
  }
  return (
    <div>
      <iframe
        width="560"
        height="315"
        title="video explicative"
        src="https://www.youtube.com/embed/8w0U_-j1eBI"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

NaturalFormOrder.propTypes = {
  handleChange: PropTypes.func,
  switchUI: PropTypes.func,
  time: PropTypes.string,
  price: PropTypes.string,
  target: PropTypes.string,
  isNaturalForm: PropTypes.bool
}

export default NaturalFormOrder
