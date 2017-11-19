import styled from 'styled-components'

const NumberIcon = styled.div`
  font-family: 'FG-B';
  color: var(${props => (props.color === 'silver' ? '--silver' : '--black')});
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(
    ${props => (props.color !== 'silver' ? '--white-true' : '--background')}
  );
  top: 5px;
  left: 5px;
  padding: 5px;
  border-radius: 5px;
`

export default NumberIcon
