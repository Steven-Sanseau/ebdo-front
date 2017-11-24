import React from 'react'
import PropTypes from 'prop-types'

import InputWrapper from './InputWrapper'
import Text from './Text'
import Bullet from './Bullet'
import BulletCheck from './BulletCheck'
import IconWrapper from './IconWrapper'

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false,
      isHover: false
    }

    this.handleClic = this.handleClic.bind(this)
    this.handleMouseHover = this.handleMouseHover.bind(this)
  }

  componentDidMount() {
    this.state.isChecked = this.props.isChecked
  }

  handleMouseHover() {
    this.setState({ isHover: !this.state.isHover })
  }

  handleClic() {
    this.props.onCheck(this.props.valueCheck)
  }

  render() {
    const { text, isChecked, onCheck, isHover, icon } = this.props
    return (
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <InputWrapper
          checked={isChecked}
          onClick={this.handleClic}
          hover={isHover}
        >
          <Bullet checked={isChecked}>
            <BulletCheck checked={isChecked} />
          </Bullet>
          <Text checked={isChecked} hover={isHover}>
            {text}
          </Text>
          <IconWrapper>{icon || null}</IconWrapper>
        </InputWrapper>
      </div>
    )
  }
}

InputCheckbox.propTypes = {
  isChecked: PropTypes.bool,
  text: PropTypes.string,
  onCheck: PropTypes.func,
  valueCheck: PropTypes.number,
  icon: PropTypes.object
}

export default InputCheckbox
