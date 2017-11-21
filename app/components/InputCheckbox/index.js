import React from 'react'
import PropTypes from 'prop-types'

import InputWrapper from './InputWrapper'
import Text from './Text'
import Bullet from './Bullet'
import BulletCheck from './BulletCheck'

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }

    this.handleClic = this.handleClic.bind(this)
  }

  componentDidMount() {
    this.state.isChecked = this.props.isChecked
  }

  handleClic() {
    console.log('coucou')
    this.props.onCheck(this.props.valueCheck)
  }

  render() {
    const { text, isChecked, onCheck } = this.props
    return (
      <InputWrapper checked={isChecked} onClick={this.handleClic}>
        <Bullet checked={isChecked}>{isChecked && <BulletCheck />}</Bullet>
        <Text>{text}</Text>
      </InputWrapper>
    )
  }
}

InputCheckbox.propTypes = {
  isChecked: PropTypes.bool,
  text: PropTypes.string,
  onCheck: PropTypes.func,
  valueCheck: PropTypes.number
}

export default InputCheckbox
