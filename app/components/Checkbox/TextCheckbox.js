import styled from 'styled-components'

const IconCheckbox = styled.div`
  font-family: 'FG-R';
  font-size: 18px;
  display: inline-block;
  line-height: 18px;
  color: var(${props => (props.error ? '--tomato' : '--black')});
`

export default IconCheckbox
