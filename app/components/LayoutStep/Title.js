import styled from 'styled-components'

const Title = styled.div`
  font-family: 'FG-B';
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-top: 23px;
  color: var(${props => (props.color === 'silver' ? '--silver' : '--black')});
`

export default Title
