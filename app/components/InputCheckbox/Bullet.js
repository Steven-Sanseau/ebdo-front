import styled from 'styled-components'

const Bullet = styled.div`
  color: var(${props => (props.checked ? '--booger' : '--silver')});
  font-family: 'FG-R';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid;
  border-color: var(${props => (props.checked ? '--booger' : '--silver')});
  display: inline-flex;
  position: absolute;
  top: 12px;
`

export default Bullet
