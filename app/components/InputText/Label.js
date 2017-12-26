import styled from 'styled-components'

const Label = styled.label`
  font-family: 'FG-R';
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: var(${props => (props.error ? '--tomato' : props.color || '--black')});
`

export default Label
