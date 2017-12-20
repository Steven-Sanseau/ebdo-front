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
function DropdownWrapper(props) {
  return (
    <DropdownWrap
      options={props.options}
      value={props.target}
      color={props.color}
      onChange={props.handleChange}
    />
  )
}
DropdownWrapper.propTypes = {
  options: PropTypes.object,
  target: PropTypes.object,
  color: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func
}
export default DropdownWrapper
