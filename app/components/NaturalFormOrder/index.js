import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import 'components/NaturalFormOrder/NaturalForm.css'
import { media } from 'global-styles'

import Dropdown from 'react-dropdown'
import 'components/NaturalFormOrder/NaturalForm.css'

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
  .Dropdown-option:hover .valueWrap .title {
    color: var(${props => (props.color ? props.color : '--black')});
  }
  .Dropdown-root:not(.is-open):after {
    color: var(${props => (props.color ? props.color : '--black')});
  }

  ${media.tablet`
    padding: 0 40px 5px 20px;
    margin-top: 5px;

    .valueWrap h3 {
      font-size: 35px;
      line-height: 50px;
    }
`};
`
const Subtitle = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
  ${media.tablet`
    line-height: 22px;
  `};
`

const TextWrap = styled.div`
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: -1.3px;
  ${media.tablet`
      font-size: 35px;
      line-height: 50px;
    `};
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
  ${media.tablet`
    margin-top: -20px;
  `} &:hover {
    transform: scale(1.1);
  }
`

export class NaturalFormOrder extends React.Component {
  valueElem = (title, subtitle) => (
    <div className="valueWrap">
      <h3 className="title">{title}</h3>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )

  render() {
    const {
      handleChange,
      target,
      time,
      price,
      switchUI,
      isNaturalForm
    } = this.props

    const opts = {
      height: '315',
      width: '560',
      playerVars: {
        autoplay: 1
      }
    }
    const options1 = [
      {
        value: '0',
        label: this.valueElem(
          'Je reçois',
          <span>
            <strong>ebdo</strong> chez moi
          </span>
        )
      },
      {
        value: '1',
        label: this.valueElem(
          "J'offre",
          <span>
            <strong>ebdo</strong> à un proche
          </span>
        )
      }
    ]
    const options2 = !target
      ? [
          {
            value: '12',
            label: this.valueElem(
              'pendant 3 mois',
              <span>Régler maintenant et recevez 12 numéros.</span>
            )
          },
          {
            value: '24',
            label: this.valueElem(
              'pendant 6 mois',
              <span>Régler maintenant et recevez 24 numéros.</span>
            )
          },
          {
            value: '48',
            label: this.valueElem(
              'pendant 12 mois',
              <span>Régler maintenant et recevez 48 numéros.</span>
            )
          },
          {
            value: '0',
            label: this.valueElem(
              'chaque mois',
              <span>
                Sans engagement, je pourrais me désengager en un clic !
              </span>
            )
          }
        ]
      : [
          {
            value: '12',
            label: this.valueElem(
              'pendant 3 mois',
              <span>Régler maintenant et recevez 12 numéros.</span>
            )
          },
          {
            value: '24',
            label: this.valueElem(
              'pendant 6 mois',
              <span>Régler maintenant et recevez 24 numéros.</span>
            )
          },
          {
            value: '48',
            label: this.valueElem(
              'pendant 12 mois',
              <span>Régler maintenant et recevez 48 numéros.</span>
            )
          }
        ]

    const options3 = [
      {
        value: '10',
        label: this.valueElem(
          <span>
            10€ <sup>/ mois</sup>
          </span>,
          <span>
            <strong>ebdo</strong> sera presque à l'équilibre !
          </span>
        )
      },
      {
        value: '15',
        label: this.valueElem(
          <span>
            15€ <sup>/ mois</sup>
          </span>,
          <span>
            <strong>ebdo</strong> sera à l'équilibre !
          </span>
        )
      },
      {
        value: '20',
        label: this.valueElem(
          <span>
            20€ <sup>/ mois</sup>
          </span>,
          <span>
            Vous aiderez d'autres abonnés à s'offrir <strong>ebdo</strong> !
          </span>
        )
      },
      {
        value: '5',
        label: this.valueElem(
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

    return (
      <div onClick={this.handleClick}>
        <div className={isNaturalForm ? '' : 'hidden'}>
          <DropdownWrap
            className="dropdown-wrap"
            options={options1}
            value={options1.find(el => el.value === (target ? '1' : '0'))}
            color="--warm-purple"
            onChange={handleChange.bind(this, 'is_gift')}
            ref={input => {
              this.textInput = input
            }}
          />

          <DropdownWrap
            className="dropdown-wrap"
            options={options2}
            value={options2.find(
              el => el.value === (target && time === 0 ? '24' : String(time))
            )}
            color="--topaz"
            onChange={handleChange.bind(this, 'duration')}
          />

          <TextWrap>
            {String(time) === '0' && <span>4 numéros</span>}
            {String(time) === '12' && <span>12 numéros</span>}
            {String(time) === '24' && <span>24 numéros</span>}
            {String(time) === '48' && <span>48 numéros</span>}
            {String(target) === 'false' && <span> chez moi </span>}
            {String(target) === 'true' && <span> à un proche </span>}
            pour le prix de{' '}
          </TextWrap>
          <DropdownWrap
            className="dropdown-wrap"
            options={options3}
            value={options3.find(el => el.value === String(price))}
            color="--turquoise-blue"
            onChange={handleChange.bind(this, 'monthly_price_ttc')}
          />
          <Help onClick={switchUI}>?</Help>
        </div>
        <div className={isNaturalForm ? 'hidden' : ''}>
          <iframe
            style={{ maxWidth: '100%' }}
            width="560"
            height="315"
            title="Pourquoi des tarifs flexibles"
            src="https://www.youtube.com/embed/L6lRmAYFI9U"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

NaturalFormOrder.propTypes = {
  handleChange: PropTypes.func,
  switchUI: PropTypes.func,
  time: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  target: PropTypes.bool,
  isNaturalForm: PropTypes.bool
}

export default NaturalFormOrder
