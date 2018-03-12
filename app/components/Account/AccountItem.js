import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import Button from 'components/Button'

const ArrowGreyLink = styled.div`
  svg {
    width: 10px;
  }
`

const AccountItemWrapper = styled(Col)`
  background-color: var(--white-true);
  margin-bottom: 30px;
  padding: 30px;
`

const Title = styled.span`
  color: var(${props => props.color});
  font-size: 22px;
  font-weight: bold;
  font-family: 'FG-R';
  text-align: left;
`

const Description = styled.div`
  font-size: 16px;
`

export class AccountItem extends React.Component {
  render() {
    const {
      title, description, link, icon, color, textLink
    } = this.props

    return (
      <AccountItemWrapper xs={6}>
        <Title color={color || '--squash'}>{title}</Title>

        <Description>{description}</Description>

        <Button color={color} handleRoute={link}>
          {textLink}
        </Button>
      </AccountItemWrapper>
    )
  }
}

AccountItem.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  textLink: PropTypes.string,
  icon: PropTypes.func
}

export default AccountItem
