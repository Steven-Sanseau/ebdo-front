import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import StyledButton from './StyledButton'
import Wrapper from './Wrapper'

function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} color={props.color} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  )

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton
        minWidth={props.minWidth}
        color={props.color}
        border={props.border}
        colorText={props.colorText}
        onClick={props.handleRoute}
        className={props.className}
      >
        {Children.toArray(props.children)}
      </StyledButton>
    )
  }

  return <Wrapper>{button}</Wrapper>
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  colorText: PropTypes.string,
  border: PropTypes.bool,
  minWidth: PropTypes.string,
  children: PropTypes.node.isRequired
}
Button.defaultProps = {
  color: '--booger',
  colorText: '--white-true',
  border: false
}

export default Button
