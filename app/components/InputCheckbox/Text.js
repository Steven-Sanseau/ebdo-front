import styled from 'styled-components'

const Text = styled.div`
  color: var(${props => (props.checked ? '--black' : '--silver')});
  font-family: 'FG-R';
  line-height: 16px;
  margin-left: 30px;
`

export default Text
