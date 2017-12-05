import styled from 'styled-components'

const IconCheckbox = styled.div`
  font-family: 'FG-R';
  font-size: 16px;
  display: inline-block;
  line-height: 16px;
  color: var(${props => (props.checked ? '--black' : '--silver')});
`

export default IconCheckbox
