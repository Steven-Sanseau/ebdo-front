import styled from 'styled-components'

const Text = styled.div`
  color: var(${props => (props.checked ? '--booger' : '--silver')});
  font-family: 'FG-R';
  display: inline-flex;
  line-height: 16px;
`

export default Text
